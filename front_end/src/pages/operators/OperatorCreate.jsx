import React, { useState } from "react";
import Create from "../../components/create-component/index";
export default function OperatorCreate() {
  const [notification, setNotification] = useState(null);

  const fields = [
    { name: "codigo", label: "Codigo", type: "text" },
    { name: "nome", label: "Nome", type: "text" },
    { name: "marca", label: "Marca", type: "text" },
    { name: "modelo", label: "Modelo", type: "text" },
    { name: "so", label: "So", type: "text" },
    { name: "memoria", label: "Memoria", type: "text" },
    { name: "processador", label: "Processador", type: "text" },
    { name: "garantia", label: "Garantia", type: "text" },
    { name: "hd", label: "Hd", type: "text" },
  ];

  const handleCreate = (formData) => {
    fetch("http://127.0.0.1:8000/api/OperatorAdd", {
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
      <Create
        title={"PC"}
        fields={fields}
        onCreate={handleCreate}
        notification={notification}
      />
    </div>
  );
}