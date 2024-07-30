// import React, { useState } from 'react';
// import { getBotResponse } from './App.jsx';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSendMessage = async () => {
//     const userMessage = { text: input, sender: 'user' };
//     setMessages([...messages, userMessage]);

//     const botMessage = await getBotResponse(input);
//     setMessages([...messages, botMessage]);

//     setInput('');
//   };

//   return (
//     <div className="chatbot">
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// };

// export default Chatbot;
