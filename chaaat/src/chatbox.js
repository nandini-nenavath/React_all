import React, { useState } from 'react';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
const questions = [
  "What is your name?",
  "How old are you?",
  "What is your email address?",
  "What is your phone number?",
  "Where do you live?"
];

const Chatbot = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    setAnswers({ ...answers, [questions[currentQuestion]]: input });
    setInput('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`User Details: \n${JSON.stringify(answers, null, 2)}`);
    }
  };

  return (
    <div className="chatbot">
    <MainContainer>
      <div className="messages">
        <div className="message bot">
        
          {questions[currentQuestion]}
        </div>
        {Object.keys(answers).map((question, index) => (
          <div key={index} className="message user">
            {answers[question]}
          </div>
        ))}
        
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </MainContainer>
    </div>
  );
};

export default Chatbot;
