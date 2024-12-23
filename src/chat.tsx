import React, { useState } from 'react';

function Chat() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([{ sender: 'Professeur Parker', text: 'Bonjour ! Posez-moi une question.' }]);

  const sendMessage = async () => {
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'Vous', text }];
    setMessages(newMessages);

    try {
      const apiUrl = `https://api.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(text)}`;
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      if (jsonData.success && jsonData.result) {
        setMessages([...newMessages, { sender: 'Professeur Parker', text: jsonData.result }]);
      } else {
        setMessages([...newMessages, { sender: 'Professeur Parker', text: 'Désolé, une erreur s\'est produite. Réessayez plus tard.' }]);
      }
    } catch (error) {
      console.error('Error fetching API response:', error);
      setMessages([...newMessages, { sender: 'Professeur Parker', text: 'Une erreur est survenue. Vérifiez votre connexion.' }]);
    }

    setText('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.sender === 'Vous' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-md ${msg.sender === 'Vous' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <strong>{msg.sender}: </strong>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white border-t">
        <textarea
          className="w-full p-2 border rounded-lg resize-none"
          rows={3}
          placeholder="Posez votre question..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={sendMessage}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default Chat;
