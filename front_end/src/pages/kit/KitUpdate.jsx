import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

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

export default function KitUpdate() {
    const [kit, setKit] = useState([]);

    const { id } = useParams()
    const [notification, setNotification] = useState(null);
    const [formData, setFormData] = useState({});
    const [mouse, setMouse] = useState([]);
    const [teclado, setTeclado] = useState([]);
    const [pc, setPc] = useState([]);
    const [monitor, setMonitor] = useState([]);
    const [webcam, setWebCam] = useState([]);
    const [operador, setOperador] = useState([]);
    const [head, setHead] = useState([]);

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
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/kit/?id=${id}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setKit(data);
                console.log(data)
            })
            .catch((err) => console.log)
    }, [id])
    //   Chamando Mouse
    async function mouseData() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/mouse");
            const jsonData = await response.json();
            setMouse(jsonData);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    // teclado
    async function keyBoardData() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/teclado");
            const jsonData = await response.json();
            setTeclado(jsonData);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    async function headData() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/head");
            const jsonData = await response.json();
            setHead(jsonData);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    // computador

    async function pCData() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/pc");
            const jsonData = await response.json();
            setPc(jsonData);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    async function MonitorData() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/monitor");
            const jsonData = await response.json();
            setMonitor(jsonData);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    async function WebCamData() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/webcam");
            const jsonData = await response.json();
            setWebCam(jsonData);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    async function OperadorData() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/operador");
            const jsonData = await response.json();
            setOperador(jsonData);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    }
    useEffect(() => {
        mouseData();

    }, []);
    useEffect(() => {
        keyBoardData();
    }, []);

    useEffect(() => {
        pCData();
    }, []);

    useEffect(() => {
        MonitorData();
    }, []);

    useEffect(() => {
        WebCamData();
    }, []);
    useEffect(() => {
        OperadorData();
    }, []);
    useEffect(() => {
        headData();
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

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

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
                            name="data_kit"
                            onChange={(e) => handleChange(e, fields.data_kit)}
                        />
                    </Label>
                    <Label>
                        Status:
                        <Input
                            type="text"
                            name="status"
                            onChange={(e) => handleChange(e, fields.status)}
                        />
                    </Label>
                    <Label>
                        Quant VGA:
                        <Input
                            type="text"
                            name="qnt_vga"
                            onChange={(e) => handleChange(e, fields.qnt_vga)}
                        />
                    </Label>
                    <Label>
                        Quant Energia:
                        <Input
                            type="text"
                            name="qnt_e"
                            onChange={(e) => handleChange(e, fields.qnt_e)}
                        />
                    </Label>
                    <Label>
                        Quant Rede:
                        <Input
                            type="text"
                            name="rede"
                            onChange={(e) => handleChange(e, fields.rede)}
                        />
                    </Label>
                    <Label>
                        Quant Lacre:
                        <Input
                            type="text"
                            name="lacre"
                            onChange={(e) => handleChange(e, fields.lacre)}
                        />
                    </Label>
                    <Label>
                        Operador:
                        <Select name="operador" onChange={handleChange} value={operador.operador} >
                            {operador.map((operador) => (
                                <Option key={operador.id} value={operador.id}>
                                    {operador.nome}
                                </Option>
                            ))}
                        </Select>
                    </Label>
                    <Label>
                        Mouse:
                        <Select name="mouse" onChange={handleChange} value={mouse.mouse}>
                            {mouse.map((mouse) => (
                                <Option key={mouse.id} value={mouse.id}>
                                    {mouse.codigo}
                                </Option>
                            ))}
                        </Select>
                    </Label>
                    <Label>
                        Teclado:
                        <Select name="teclado" onChange={handleChange} value={teclado.teclado}>
                            {teclado.map((teclado) => (
                                <Option key={teclado.id} value={teclado.id}>
                                    {teclado.codigo}
                                </Option>
                            ))}
                        </Select>
                    </Label>
                    <Label>
                        Head:
                        <Select name="head" onChange={handleChange} value={head.head}>
                            {teclado.map((head) => (
                                <Option key={head.id} value={head.id}>
                                    {head.codigo}
                                </Option>
                            ))}
                        </Select>
                    </Label>
                    <Label>
                        Computador:
                        <Select name="pc" onChange={handleChange} value={pc.pc}>
                            {pc.map((pc) => (
                                <Option key={pc.id} value={pc.id}>
                                    {pc.nome}
                                </Option>
                            ))}
                        </Select>
                    </Label>
                    <Label>
                        Monitor:
                        <Select name="monitor" onChange={handleChange} value={monitor.monitor}>
                            {monitor.map((monitor) => (
                                <Option key={monitor.id} value={monitor.id}>
                                    {monitor.codigo}
                                </Option>
                            ))}
                        </Select>
                    </Label>
                    <Label>
                        Web Cam:
                        <Select name="webcam" onChange={handleChange} value={webcam.webcam}>
                            {webcam.map((webcam) => (
                                <Option key={webcam.id} value={webcam.id}>
                                    {webcam.codigo}
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
        </FormContainer >
    );
}
