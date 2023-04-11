// ErrorModal.js
import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ title, message, errorCode, onClose }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="error-modal-backdrop" onClick={handleClose}>
      <div className="error-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{message}</p>
        <p>{errorCode}</p>
        <button className="ok-button" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;