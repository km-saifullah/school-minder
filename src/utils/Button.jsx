import React from "react";

const Button = ({ btnTitle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-lg bg-primary text-white px-4 py-2 rounded hover:bg-white hover:text-primary transition-all ease-linear duration-300"
    >
      {btnTitle}
    </button>
  );
};

export default Button;
