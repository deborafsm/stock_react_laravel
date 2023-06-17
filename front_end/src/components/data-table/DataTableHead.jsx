import React from "react";
import Edit from "../button/remove/remove";
import Remove from "../button/edit/edit";
import style from "../../style/style-head.css";

import styled from "styled-components";
const CenteredCell = styled.td`
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
`;

function DataTable({ data, handleRemove, handleEdit }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.marca}</td>
          <td>{item.modelo}</td>
          <td>{item.codigo}</td>
          <td>{item.status}</td>
          <CenteredCell>
            <Remove onClick={() => handleRemove(item.id)}></Remove>
            <Edit onClick={() => handleEdit(item.id)}></Edit>
          </CenteredCell>
        </tr>
      ))}
    </tbody>
  );
}

export default DataTable;
