import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Update from '../../components/update-component/update';

import { FormContainer, Title, FormTitle, Label, Select, Option, Input, SubmitButton, Grid, Notification } from '../../style/styledComponents';

export default function PcUpdate() {
    const { id } = useParams();
    const [pc, setPc] = useState([]);
    const [notification, setNotification] = useState(null);
    const [formData, setFormData] = useState({});
    const fields = [
        { name: "id", label: "id", type: "text" },
        { name: "marca", label: "Marca", type: "text" },
        { name: "modelo", label: "Modelo", type: "text" },
        { name: "codigo", label: "Código", type: "text" },
        { name: "status", label: "status", type: "text" },
    ];
    const dataHead = ["id", "marca", "modelo", "codigo", "status"];



    const handleUpdate = (formData) => {
        fetch("http://127.0.0.1:8000/api/pcUpdate", {
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
        setFormData({ ...pc, [e.target.name]: e.target.value, id })
        console.log(formData)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(formData);
    };
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/pc_id/${id}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setPc(data);
                console.log(data)
            })
            .catch((err) => console.log)
    }, [id])
    return (
        <div>
            <div>
                <FormContainer>
                    <FormTitle>Pc</FormTitle>
                    <form onSubmit={handleSubmit}>
                        <Grid>
                            <Label>
                                Marca:
                                <Input
                                    type="text"
                                    name="marca"
                                    defaultValue={pc.marca}
                                    onChange={(e) => handleChange(e, fields.marca)}
                                />
                            </Label>
                            <Label>
                                Modelo:
                                <Input
                                    type="text"
                                    name="modelo"
                                    defaultValue={pc.modelo}
                                    onChange={(e) => handleChange(e, fields.modelo)}
                                />
                            </Label>
                            <Label>
                                Código:
                                <Input
                                    type="text"
                                    name="codigo"
                                    defaultValue={pc.codigo}
                                    onChange={(e) => handleChange(e, fields.codigo)}
                                />
                            </Label>
                            <Label>
                                Status
                                <Input
                                    type="text"
                                    name="status"
                                    defaultValue={pc.status}
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
