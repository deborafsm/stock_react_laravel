import React, { useState } from "react";
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
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
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

function Create({ fields, onCreate, notification, title }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e, fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
  };

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <FormGroup>
            <div key={field.id}>
              <Label>
                {field.label}:
                <Input
                  type={field.type}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(e, field.name)}
                />
              </Label>
            </div>
          </FormGroup>
        ))}
        <br />
        <SubmitButton type="submit">Create</SubmitButton>
        {notification && (
          <Notification backgroundColor={notification.backgroundColor}>
            {notification.message}
          </Notification>
        )}
      </form>
    </FormContainer>
  );
}

export default Create;
