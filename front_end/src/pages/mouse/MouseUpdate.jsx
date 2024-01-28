import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Update from '../../components/update-component/update';
import { FormContainer, FormTitle, Label, Input, SubmitButton, Grid, Notification } from '../../style/styledComponents';


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
