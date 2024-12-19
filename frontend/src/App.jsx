import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

function App(){

  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    
    const newMessage = { type: 'user', text: userMessage };
    setMessages((prev) => [...prev, newMessage]);
  
    try{
      
      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage }),
      });
  
      const data = await response.json();
  
      if(response.ok && data.success)
        setMessages((prev) => [...prev, { type: 'bot', text: data.reply }]);
       
      
      else 
        setMessages((prev) => [...prev, { type: 'bot', text: 'Something went wrong. Please try again.' }]);
      

    } 
    
    catch(error){
      setMessages((prev) => [...prev, { type: 'bot', text: 'Error connecting to server. Please try later.' }]);
    }

  };
  

  return (
    <div className='form'>
      <div className='messages'>
        <ChatWindow messages={messages} />
      </div>
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );

}

export default App;