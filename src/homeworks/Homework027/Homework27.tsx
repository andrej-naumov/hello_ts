import React, { useState } from 'react';

const Homework27 = () => {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handlePostMessage = () => {
    if (message.trim() !== '') {
      setPosts([...posts, message]);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Мой блог</h2>
      <input
        type="text"
        placeholder="Введите ваше сообщение"
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={handlePostMessage}>Запостить</button>
      <div>
        {posts.map((post, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
            {post}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homework27;
