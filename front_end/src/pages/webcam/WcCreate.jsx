import React, { useState } from "react";
import Create from "../../components/create-component/index";

export default function WcCreate() {
  const [notification, setNotification] = useState(null);
  const fields = [
    { name: "marca", label: "Marca", type: "text" },
    { name: "modelo", label: "Modelo", type: "text" },
    { name: "codigo", label: "Código", type: "text" },
  ];
  const handleCreate = (formData) => {
    fetch("http://127.0.0.1:8000/api/tecladoAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Verifica se a resposta foi bem-sucedida
        if (data.result === "success") {
          setNotification("Item criado com sucesso!");
        } else {
          setNotification("Erro ao criar item.");
        }
      })
      .catch((error) => {
        console.error("Erro ao criar item:", error);
        setNotification(
          "Erro ao criar item. Por favor, tente novamente mais tarde."
        );
      });
  };
  return (
    <div>
      <Create fields={fields} onCreate={handleCreate} />
    </div>
  );
}
