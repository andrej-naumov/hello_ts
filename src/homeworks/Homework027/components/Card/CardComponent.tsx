import React from 'react';
import Message from '../Message/MessageComponent';

const Card: React.FC = () => {
  return (
    <div className="card">
      <h2>Your Name</h2>
      <Message />
    </div>
  );
};

export default Card;