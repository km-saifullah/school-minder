import React from "react";

const InputField = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-inputBg px-3 py-2 text-primary text-base font-normal font-openSans border border-solid  outline-none rounded focus:border-primary"
    />
  );
};

export default InputField;
