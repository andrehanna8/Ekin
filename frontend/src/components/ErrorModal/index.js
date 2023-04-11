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
        <div className="em-info">
        <h2 id="em-title">{title}</h2>
        <p>{message}</p>
        <p id="bold">[&nbsp;{errorCode}&nbsp;]</p>

        </div>
        <button className="ok-button" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;