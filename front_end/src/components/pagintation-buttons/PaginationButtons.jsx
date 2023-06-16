import React from "react";

import styled from "styled-components";

const PaginationContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100px; /* Ajuste a altura conforme necessário */
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const PaginationItem = styled.li`
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 5px; /* Adiciona borda arredondada */
  padding: 5px 10px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    background-color: #ccc;
    color: #fff;
  }
`;

function PaginationButtons({ data, itemsPerPage, currentPage, paginate }) {
  if (data.length <= itemsPerPage) {
    return null; // Não exibe os botões de paginação se não há dados suficientes
  }

  return (
    <div>
      {/* Conteúdo da tabela aqui */}

      <PaginationContainer>
        <PaginationWrapper>
          <PaginationList>
            {Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, index) => (
                <PaginationItem
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </PaginationItem>
              )
            )}
          </PaginationList>
        </PaginationWrapper>
      </PaginationContainer>
    </div>
  );
}

export default PaginationButtons;
