import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

const Message: React.FC = () => {
  const { message } = useContext(MessageContext);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Message;