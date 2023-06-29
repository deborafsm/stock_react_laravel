import React from "react";
import Create from "../../components/create-component/index";

const fields = [
  { name: "marca", label: "Marca", type: "text" },
  { name: "modelo", label: "Modelo", type: "text" },
  { name: "codigo", label: "Código", type: "text" },
  { name: "status", label: "Status", type: "text" },
];
const handleCreate = (formData) => {
  fetch("http://127.0.0.1:8000/api/webcamAdd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Lógica para tratar a resposta da API
      console.log("Item criado com sucesso:", data);
    })
    .catch((error) => {
      // Lógica para tratar erros na chamada à API
      console.error("Erro ao criar item:", error);
    });
};

export default function HeadCreate() {
  return (
    <div>
      <Create fields={fields} onCreate={handleCreate} />
    </div>
  );
}
