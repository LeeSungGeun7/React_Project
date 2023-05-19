import React, { useEffect, useState } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const ChatComponent = () => {
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const socket = new SockJS('/chat');
    const stomp = Stomp.over(socket);
    stomp.connect({}, () => {
      setStompClient(stomp);
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, );

  const handleSendMessage = () => {
    const message = {
      sender: 'Your Name',
      content: messageInput
    };

    stompClient.send('/app/chat/{roomId}/sendMessage', {}, JSON.stringify(message));
    setMessageInput('');
  };

  useEffect(() => {
    if (stompClient) {
      stompClient.subscribe('/topic/{roomId}', (message) => {
        setMessages((prevMessages) => [...prevMessages, JSON.parse(message.body)]);
      });
    }
  }, [stompClient]);

  return (
    <>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}:</strong> {message.content}
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </>
  );
};

export default ChatComponent;
