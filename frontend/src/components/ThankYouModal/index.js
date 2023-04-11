import './ThankYouModal.css';
import { useState } from 'react';

export default function ThankYouModal({ setShowThankYouModal }) {

  const hideModal = (e) => {
    if (e.target.classList.contains('thank-you-modal')) {
      setShowThankYouModal(false);
    }
  };

  const keepModal = (e) => {
    e.stopPropagation();
  };

  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="thank-you-modal" onClick={hideModal}>
      <div className="thank-you-modal-content" onClick={keepModal}>
        <h1>Thank you for checking out my Nike Clone!</h1>
        <h2>Feel free to check out my social links</h2>
        <div className="social-links">
          <a href="https://github.com/andrehanna8" target="blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/andre-hanna/" target="blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <button onClick={redirectToHome}>Back to Home</button>
      </div>
    </div>
  );
}
