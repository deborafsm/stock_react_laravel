import React, { useState } from "react";

function Create({ fields, onCreate }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e, fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
  };

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label>
              {field.label}:
              <input
                type={field.type}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e, field.name)}
              />
            </label>
          </div>
        ))}
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;