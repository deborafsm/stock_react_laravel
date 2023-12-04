import React, { useEffect, useState } from "react";

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

export default function KitCreate() {
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({});
  const [mouse, setMouse] = useState([]);
  const fields = [
    { name: "data_kit", label: "Data", type: "date" },
    { name: "status", label: "Status", type: "text" },
    { name: "qnt_vga", label: "VGA", type: "text" },
    { name: "qnt_e", label: "E", type: "text" },
    { name: "rede", label: "Rede", type: "text" },
    { name: "lacre", label: "Lacre", type: "text" },
    { name: "operador", label: "Operador", type: "text" },
    { name: "pc", label: "pc", type: "text" },
    { name: "foto", label: "Foto", type: "text" },
    { name: "monitor", label: "Monitor", type: "text" },
    { name: "webcam", label: "Web Cam", type: "text" },
    { name: "mouse", label: "Mouse", type: "text" },
    { name: "teclado", label: "Teclado", type: "text" },
    { name: "head", label: "Head", type: "text" },
  ];

  //   Chamando Mouse
  async function fetchData() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/mouse");
      const jsonData = await response.json();
      setMouse(jsonData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleCreate = (formData) => {
    fetch("http://127.0.0.1:8000/api/kitAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          setNotification({
            message: "Item criado com sucesso!",
            backgroundColor: "#28a745",
          });
        } else {
          setNotification({
            message: "Erro ao criar item.",
            backgroundColor: "#dc3545",
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao criar item:", error);
        setNotification({
          message: "Erro ao criar item. Por favor, tente novamente mais tarde.",
          backgroundColor: "#dc3545",
        });
      });
  };

  const handleChange = (e, fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(formData);
  };
  return (
    <FormContainer>
      <FormTitle>Kit</FormTitle>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Label>
            Data:
            <Input
              type="date"
              valor={formData["data_kit"] || ""}
              onChange={(e) => handleChange(e, formData.data_kit.nome)}
            />
          </Label>
          <Label>
            Status:
            <Input
              type="text"
              valor={formData["status"] || ""}
              onChange={(e) => handleChange(e, formData.status.nome)}
            />
          </Label>
          <Label>
            VGA:
            <Input
              type="text"
              valor={formData["qnt_vga"] || ""}
              onChange={(e) => handleChange(e, formData.qnt_vga.nome)}
            />
          </Label>
          <Label>
            Data:
            <Input
              type="text"
              valor={formData["qnt_e"] || ""}
              onChange={(e) => handleChange(e, formData.qnt_e.nome)}
            />
          </Label>
          <Label>
            Data:
            <Input
              type="text"
              valor={formData["data_kit"] || ""}
              onChange={(e) => handleChange(e, formData.data_kit.nome)}
            />
          </Label>
          <Label>
            Data:
            <Input
              type="date"
              valor={formData["data_kit"] || ""}
              onChange={(e) => handleChange(e, formData.data_kit.nome)}
            />
          </Label>
          <Label>
            Data:
            <Input
              type="date"
              valor={formData["data_kit"] || ""}
              onChange={(e) => handleChange(e, formData.data_kit.nome)}
            />
          </Label>
          <Label>
            Mouse:
            <Select name="mouse">
              {mouse.map((mouse) => (
                <Option key={mouse.id} value={mouse.id}>
                  {mouse.codigo}
                </Option>
              ))}
            </Select>
          </Label>
        </Grid>

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
