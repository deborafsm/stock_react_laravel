import React from "react";
import Edit from "../button/remove/remove";
import Remove from "../button/edit/edit";
import styled from "styled-components";

const CenteredCell = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function DataTable({ data, handleRemove, handleEdit, columns }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td key={column}>{item[column]}</td>
          ))}
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
