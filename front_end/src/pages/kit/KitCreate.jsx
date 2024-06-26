import React, { useEffect, useState } from "react";
import {select, option, FormContainer, FormTitle, Label, Input, SubmitButton, Grid, Notification } from '../../style/styledComponents';

export default function KitCreate() {
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
            <select name="operador" onChange={handleChange} value={operador.operador} >
              {operador.map((operador) => (
                <option key={operador.id} value={operador.id}>
                  {operador.nome}
                </option>
              ))}
            </select>
          </Label>
          <Label>
            Mouse:
            <select name="mouse" onChange={handleChange} value={mouse.mouse}>
              {mouse.map((mouse) => (
                <option key={mouse.id} value={mouse.id}>
                  {mouse.codigo}
                </option>
              ))}
            </select>
          </Label>
          <Label>
            Teclado:
            <select name="teclado" onChange={handleChange} value={teclado.teclado}>
              {teclado.map((teclado) => (
                <option key={teclado.id} value={teclado.id}>
                  {teclado.codigo}
                </option>
              ))}
            </select>
          </Label>
          <Label>
            Head:
            <select name="head" onChange={handleChange} value={head.head}>
              {teclado.map((head) => (
                <option key={head.id} value={head.id}>
                  {head.codigo}
                </option>
              ))}
            </select>
          </Label>
          <Label>
            Computador:
            <select name="pc" onChange={handleChange} value={pc.pc}>
              {pc.map((pc) => (
                <option key={pc.id} value={pc.id}>
                  {pc.nome}
                </option>
              ))}
            </select>
          </Label>
          <Label>
            Monitor:
            <select name="monitor" onChange={handleChange} value={monitor.monitor}>
              {monitor.map((monitor) => (
                <option key={monitor.id} value={monitor.id}>
                  {monitor.codigo}
                </option>
              ))}
            </select>
          </Label>
          <Label>
            Web Cam:
            <select name="webcam" onChange={handleChange} value={webcam.webcam}>
              {webcam.map((webcam) => (
                <option key={webcam.id} value={webcam.id}>
                  {webcam.codigo}
                </option>
              ))}
            </select>
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
