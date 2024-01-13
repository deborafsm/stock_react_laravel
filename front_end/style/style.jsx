import React from 'react'
import styled from "styled-components";
const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
const Notification = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  border-radius: 4px;
`;
const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Option = styled.option`
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 0 auto;
`;
export default function style() {
    return (
        <div>

        </div>
    )
}
