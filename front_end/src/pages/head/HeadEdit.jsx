import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Update from '../../components/update-component/update';
export default function HeadEdit() {
  const { id } = useParams();
  const [head, setHead] = useState([]);
  const [notification, setNotification] = useState(null);
  const fields = [
    { name: "id", label: "id", type: "text" },
    { name: "marca", label: "Marca", type: "text" },
    { name: "modelo", label: "Modelo", type: "text" },
    { name: "codigo", label: "Código", type: "text" },
    { name: "status", label: "status", type: "text" },
  ];
  const dataHead = ["id", "marca", "modelo", "codigo", "status"];
  const handleUpdate = (formData) => {
    fetch("http://127.0.0.1:8000/api/headUpdate", {
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
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/head_id/${id}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json())
      .then((data) => {
        setHead(data);
        console.log(data)
      })
      .catch((err) => console.log)
  }, [id])
  return (
    <div>
      <h1>{head.id}</h1>
      <Update
        dataHead={dataHead}
        data={head}
        fields={fields}
        onUpdate={handleUpdate}
        notification={notification} />

    </div>
  )
}
