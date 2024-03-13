import React, { createContext, useState, ReactNode } from 'react';

type MessageContextType = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

type MessageProviderProps = {
  children: ReactNode;
};

export const MessageContext = createContext<MessageContextType>({
  message: '',
  setMessage: () => {},
});

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
