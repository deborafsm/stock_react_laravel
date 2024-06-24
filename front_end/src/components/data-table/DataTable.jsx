import React from "react";
import StyledButton from "../button/remove/remove";
import EDIT from "../button/edit/edit";
import styled from "styled-components";
import { BsFillTrashFill, BsFillPenFill, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
const CenteredCell = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonRemove = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
 

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;
const ButtonEdit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  
  
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;
const ButtonEye = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  
  
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

function DataTable({ data, handleRemove, handleDetais, columns, rota }) {
  return (
    <tbody>
      
      {data.map((item) => (
        <tr scope="row" key={item.id}>
          {columns.map((column) => (
            <td key={column}>{item[column]}</td>
          ))}
          <CenteredCell>
            <ButtonRemove className="btn btn-danger" onClick={() => handleRemove(item.id)}>
              <BsFillTrashFill />
            </ButtonRemove>

            <ButtonEdit className="btn btn-primary">
              <Link to={`${rota}/${item.id}`} onClick={() => handleDetais(item.id)}>
                <BsFillPenFill />
              </Link>
            </ButtonEdit>

            <ButtonEye className="btn btn-dark">
              <Link to={`${rota}/${item.id}`} onClick={() => handleDetais(item.id)}>
                <BsEye />
              </Link>
            </ButtonEye>
          </CenteredCell>
        </tr>
      ))}
    </tbody>
  );
}

export default DataTable;
