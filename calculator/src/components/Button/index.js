import React from "react";
import "./Button.css";

const Button = ({ content, type, onButtonClick }) => {
  return (
    <div
      onClick={onButtonClick(content)}
      className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
    >
      {content}
    </div>
  );
};

export default Button;
