import React, { useEffect, useState } from "react";
import DataTable from "../../components/data-table/DataTable";
import SearchBar from "../../search/SearchBar";
import PaginationButtons from "../../components/pagintation-buttons/PaginationButtons";
import styled from "styled-components";
import { Container, Title, SearchForm, DownloadButton, StyledTable, Notification } from '../../style/styledComponents';

export default function KeyBoardReader() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const columns = ["id", "marca", "modelo", "codigo", "status"];
  
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  async function keyBoardDetails(id) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/head_id/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("teste", data.id);
      return data; // Retorne a Promise para uso posterior
    } catch (error) {

    }
  };
  async function fetchData() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/teclado");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  }

  function handleEdit(id) {
    console.log("Editar item:", id);
  }

  function handleRemove(id) {
    const confirmDelete = window.confirm(
      "Tem certeza de que deseja remover este item?"
    );
    if (confirmDelete) {
      fetch(`http://127.0.0.1:8000/api/tecladoDel/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === "success") {
            console.log("Item removido com sucesso!");
            // Atualize o estado 'data' com os dados atualizados, excluindo o item removido
            setData((prevData) => prevData.filter((item) => item.id !== id));
            // Exiba a notificação de sucesso
            setNotification({
              message: "Item removido com sucesso!",
              backgroundColor: "#28a745",
            });
            setTimeout(() => {
              setNotification(null);
            }, 1000);
          } else {
            console.log("Erro ao remover item.");
            // Exiba a notificação de erro
            setNotification({
              message: "Erro ao remover item.",
              backgroundColor: "#dc3545",
            });
            setTimeout(() => {
              setNotification(null);
            }, 1000);
          }
        })
        .catch((error) => {
          console.error("Erro ao remover item:", error);
          // Exiba a notificação de erro
          setNotification({
            message:
              "Erro ao remover item. Por favor, tente novamente mais tarde.",
            backgroundColor: "#dc3545",
          });
        });
    }
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const filteredData = data
    .filter((item) =>
      item.marca.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reverse();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const handleDownload = () => {
    // Exemplo simples: crie um arquivo CSV com os dados da tabela
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data
        .map(
          (item) =>
            `${item.id},${item.marca},${item.modelo},${item.codigo},${item.status}`
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "relatorio.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <Container>
        <Title>Teclado</Title>
        <SearchForm>
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
          <button>
            <a href="/keyboard-create">Create</a>
          </button>
          <DownloadButton onClick={handleDownload}>
            Baixar Relatório
          </DownloadButton>
        </SearchForm>

        <div className="tabela-container">
          <StyledTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>marca</th>
                <th>modelo</th>
                <th>codigo</th>
                <th>status</th>
                <th>Botoes</th>
              </tr>
            </thead>
            <DataTable
              rota={'/keyboard-update'}
              data={currentItems}
              handleRemove={handleRemove}
              handleEdit={keyBoardDetails(data.id)}
              columns={columns}
            />
          </StyledTable>
        </div>
        <PaginationButtons
          data={filteredData}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
        {notification && (
          <Notification backgroundColor={notification.backgroundColor}>
            {notification.message}
          </Notification>
        )}
      </Container>
    </div>
  );
}
