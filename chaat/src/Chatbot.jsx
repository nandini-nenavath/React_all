import React, { useState } from 'react';
import {MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator,ConversationHeader,Avatar} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./module.css";

const questions = [
  "What is your name?",
  "How old are you?",
  "What is your email address?",
  "What is your phone number?",
  "Where do you live?",
  "Have a nice day"
];

const Chatbot = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState([
    {
      content: questions[0],
      sentTime: new Date().toISOString(),
      sender: 'ChatBot',
    }
  ]);
  const [answers, setAnswers] = useState({});
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (messageContent) => {
    const newMessage = {
      content: messageContent,
      sentTime: new Date().toISOString(),
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setAnswers({ ...answers, [questions[currentQuestion]]: messageContent });

    if (currentQuestion < questions.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        const nextQuestion = {
          content: questions[currentQuestion + 1],
          sentTime: new Date().toISOString(),
          sender: 'ChatBot',
        };

        setMessages((prevMessages) => [...prevMessages, nextQuestion]);
        setCurrentQuestion(currentQuestion + 1);
        setIsTyping(false);
      }, 1000);
    } else {
      alert(`User Details: \n${JSON.stringify(answers, null, 2)}`);
    }
  };

  return (
    <MainContainer className='tab'>
    <ConversationHeader>
    <Avatar
      name="Chat Bot"
      src="https://botnation.ai/site/wp-content/uploads/2022/01/chatbot-1-1348x800.png"
    />
    </ConversationHeader>
      <ChatContainer>
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={isTyping ? <TypingIndicator content="ChatBot is typing" /> : null}
        >
          {messages.map((message, i) => (
            <Message
              key={i}
              model={{
                message: message.content,
                sentTime: message.sentTime,
                sender: message.sender,
                direction: message.sender === 'user' ? 'outgoing' : 'incoming',
              }}
            />
          ))}
        </MessageList>
        <MessageInput placeholder="Type message here" onSend={handleSend} />
      </ChatContainer>
    
    </MainContainer>
  );
};

export default Chatbot;
