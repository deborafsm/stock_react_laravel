import React, { useState } from "react";
import Create from "../../components/create-component";
export default function KitCreate() {
  const [notification, setNotification] = useState(null);
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
  return (
    <div>
      <h1>teste</h1>
      <Create
        title={"Kit"}
        fields={fields}
        onCreate={handleCreate}
        notification={notification}
      />
    </div>
  );
}
