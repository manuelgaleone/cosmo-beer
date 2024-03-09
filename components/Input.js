import React from 'react';

const InputText = ({ label, id, value, setValue, placeholder, type }) => {
  return (
    <div className="input-text-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
