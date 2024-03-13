import React, { useState, useContext } from 'react';
import { MessageContext } from '../Message/MessageContext';
import Card from '../Card/CardComponent';

const BlogManagement: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { setMessage } = useContext(MessageContext);

  const handlePost = () => {
    setMessage(inputValue);
  };

  return (
    <div>
      <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handlePost}>Запостить</button>
      <Card />
    </div>
  );
};

export default BlogManagement;