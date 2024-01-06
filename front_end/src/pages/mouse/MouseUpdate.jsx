import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Update from '../../components/update-component/update';
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
export default function MouseUpdate() {
    const { id } = useParams();
    const [mouse, setMouse] = useState([]);
    const [notification, setNotification] = useState(null);
    const [formData, setFormData] = useState({});
    const fields = [
        { name: "id", label: "id", type: "text" },
        { name: "marca", label: "Marca", type: "text" },
        { name: "modelo", label: "Modelo", type: "text" },
        { name: "codigo", label: "Código", type: "text" },
        { name: "status", label: "status", type: "text" },
    ];
    const handleUpdate = (formData) => {
        fetch("http://127.0.0.1:8000/api/mouseUpdate", {
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
                        message: "Item editado com sucesso!",
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
                console.error("Erro ao editar item:", error);
                setNotification({
                    message: "Erro ao editar item. Por favor, tente novamente mais tarde.",
                    backgroundColor: "#dc3545",
                });
            });
    };
    function handleChange(e) {
        setFormData({ ...mouse, [e.target.name]: e.target.value, id, })
        console.log("form dta", formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(formData);
    };
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/mouse_id/${id}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setMouse(data);
                console.log(data)
            })
            .catch((err) => console.log)
    }, [id])
    return (
        <div>
            <div>
                <FormContainer>
                    <FormTitle>Mouse</FormTitle>
                    <form onSubmit={handleSubmit}>
                        <Grid>
                            <Label>
                                Marca:
                                <Input
                                    type="text"
                                    name="marca"
                                    defaultValue={mouse.marca}
                                    onChange={(e) => handleChange(e, fields.marca)}
                                />
                            </Label>
                            <Label>
                                Modelo:
                                <Input
                                    type="text"
                                    name="modelo"
                                    defaultValue={mouse.modelo}
                                    onChange={(e) => handleChange(e, fields.modelo)}
                                />
                            </Label>
                            <Label>
                                Código:
                                <Input
                                    type="text"
                                    name="codigo"
                                    defaultValue={mouse.codigo}
                                    onChange={(e) => handleChange(e, fields.codigo)}
                                />
                            </Label>
                            <Label>
                                Status
                                <Input
                                    type="text"
                                    name="status"
                                    defaultValue={mouse.status}
                                    onChange={(e) => handleChange(e, fields.status)}
                                />
                            </Label>

                        </Grid>

                        <br />
                        <SubmitButton type="submit">Update</SubmitButton>
                        {notification && (
                            <Notification backgroundColor={notification.backgroundColor}>
                                {notification.message}
                            </Notification>
                        )}
                    </form>
                </FormContainer >
            </div>
        </div>
    )
}
