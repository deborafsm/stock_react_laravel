import React, { useEffect, useState } from "react";
import Edit from "../../components/button/remove/remove";
import Remove from "../../components/button/edit/edit";
import style from "../../style/style-head.css";

function HeadReadPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Define o número de itens por página
  // const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/head");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  }

  // Baixa relatório
  const handleDownload = () => {
    // Gere o relatório com base nos dados da tabela aqui

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
  // Calcula o índice do último item da página atual
  const indexOfLastItem = currentPage * itemsPerPage;

  // Calcula o índice do primeiro item da página atual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Obtém os itens da página atual
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Atualiza a página atual
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function handleEdit(id) {
    // Lógica para editar o item com o ID fornecido
    console.log("Editar item:", id);
  }

  function handleRemove(id) {
    // Lógica para remover o item com o ID fornecido
    console.log("Remover item:", id);
  }
  // Search
  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <div>
      <div>
        <div className="container-title">
          {/* <div className="title">
            <h1>Head</h1>
          </div> */}
          <div className="container-input">
            <label htmlFor="pesquisar">
              {" "}
              Pesquisar:
              <input type="text" placeholder="" />
            </label>
          </div>
          <div className="container-button">
            <button onClick={handleDownload}>Baixar Relatório</button>
          </div>
        </div>
        <div className="tabela-container">
          {/* <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
          /> */}
          <table className="tabela">
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
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.codigo}</td>
                  <td>{item.status}</td>
                  <td>
                    <Remove onClick={() => handleRemove(item.id)}></Remove>

                    <Edit onClick={() => handleEdit(item.id)}></Edit>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination">
        {data.length > itemsPerPage && (
          <ul>
            {Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HeadReadPage;
