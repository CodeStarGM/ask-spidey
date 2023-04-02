import React from "react";

const LoadingMessage = () => {
  return (
    <>
      <div className="chat-bubble">
        <div className="typing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingMessage;
