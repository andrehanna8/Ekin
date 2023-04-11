import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function SlideShowBar() {
  const currentUser = useSelector((state) => state.session.user);

  const handleClick = () => {
    if (!currentUser) {
      const signUpButton = document.getElementById('sign-up');
      signUpButton?.click();
    }
  };

  const messages = [
    <>
      FREE SHIPPING + RETURNS, FREE MEMBERSHIP, EXCLUSIVE PRODUCTS &nbsp;	
      <button className="join-now-button" onClick={handleClick}>
        Join Now
      </button>
      !
    </>,
    <>
    WHY WAIT? TRY STORE PICKUP	Buy online and find a store near you for pick up in less than 2 hours. Shop now.
    </>,

    <>
      Enter code <span id="promo-code">HIREME</span> for 99% off!
    </>

    // Add more messages here
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const resetTimer = () => {
    clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalId);
  }, []);

  const prevMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
    resetTimer();
  };

  const nextMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    resetTimer();
  };

  return (
    <div className="slide-show-bar">
      <div className="message-container">
        <button className="slide-nav-button prev-button" onClick={prevMessage}>
          &lt;
        </button>
        <div className="message-wrapper">{messages[currentMessageIndex]}</div>
        <button className="slide-nav-button next-button" onClick={nextMessage}>
          &gt;
        </button>
      </div>
    </div>
  );
}
