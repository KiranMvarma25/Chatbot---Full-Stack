import { useState } from 'react';

import { CiLocationArrow1 } from "react-icons/ci";

const MessageInput = ({ onSendMessage }) => {

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(message.trim()){
      onSendMessage(message);
      setMessage('');
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputField'>
        <input className='Input' type="text" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
        <button className='Button' type="submit"><CiLocationArrow1 /></button>
      </div>
    </form>
  );
};

export default MessageInput;