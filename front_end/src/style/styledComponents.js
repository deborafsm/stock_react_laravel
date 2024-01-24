import React from 'react'
import styled from "styled-components";

export const H1STYLE = styled.h1`
  color: blue;
`;
export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const Notification = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  border-radius: 4px;
`;
export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Option = styled.option`
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 0 auto;
`;

// 
export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

export const SearchForm = styled.form`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const DownloadButton = styled.button`
  padding: 5px 10px;
  background-color: #343a40;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #dee2e6;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f1f2f3;
  }
`;
