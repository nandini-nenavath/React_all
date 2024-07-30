// import { useState } from 'react';
// import './App.css';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";

// const systemMessage = {
//   "role": "system", 
//   "content": "Explain things like you're talking to a software professional with 2 years of experience."
// }

// function App() {
//   const [messages, setMessages] = useState([
//     {
//       content: "Hello, I'm ChatGPT! Ask me anything!",
//       sentTime: "just now",
//       sender: "ChatGPT"
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     const newMessage = {
//       content: message,
//       sentTime: "just now",
//       sender: "user",
//       direction: 'outgoing'
//     };

//     const newMessages = [...messages, newMessage];
    
//     setMessages(newMessages);

//     setIsTyping(true);
//     await processMessageToChatGPT(newMessages);
//   };

//   async function processMessageToChatGPT(chatMessages) {
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.content }
//     });

//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         systemMessage,
//         ...apiMessages
//       ]
//     }

//     await fetch("https://api.openai.com/v1/chat/completions", 
//     {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + API_KEY,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(apiRequestBody)
//     }).then((data) => {
//       return data.json();
//     }).then((data) => {
//       console.log(data);
//       setMessages([...chatMessages, {
//         content: data.choices[0].message.content,
//         sentTime: "just now",
//         sender: "ChatGPT"
//       }]);
//       setIsTyping(false);
//     }).catch((error) => {
//       console.error("Error:", error);
//       setIsTyping(false);
//     });
//   }

//   return (
//     <div className="App">
//       <div style={{ position: "relative", height: "800px", width: "700px" }}>
//         <MainContainer>
//           <ChatContainer>       
//             <MessageList 
//               scrollBehavior="smooth" 
//               typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
//             >
//               {messages.map((message, i) => {
//                 console.log(message);
//                 return (
//                   <Message 
//                     key={i} 
//                     model={{
//                       message: message.content,
//                       sentTime: message.sentTime,
//                       sender: message.sender,
//                       direction: message.sender === "user" ? "outgoing" : "incoming"
//                     }}
//                   />
//                 );
//               })}
//             </MessageList>
//             <MessageInput placeholder="Type message here" onSend={handleSend} />        
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }

// export default App;
// import { useState } from 'react';
// import './App.css';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";

// const systemMessage = {
//   "role": "system", 
//   "content": "Explain things like you're talking to a software professional with 2 years of experience."
// };

// function App() {
//   const [messages, setMessages] = useState([
//     {
//       content: "Hello, I'm ChatGPT! Ask me anything!",
//       sentTime: "just now",
//       sender: "ChatGPT"
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     const newMessage = {
//       content: message,
//       sentTime: "just now",
//       sender: "user",
//       direction: 'outgoing'
//     };

//     const newMessages = [...messages, newMessage];
//     setMessages(newMessages);
//     setIsTyping(true);
//     await processMessageToChatGPT(newMessages);
//   };

//   async function processMessageToChatGPT(chatMessages) {
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.content };
//     });

//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         systemMessage,
//         ...apiMessages
//       ]
//     };

//     try {
//       const response = await fetch("https://api.openai.com/v1/chat/completions", 
//       {
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(apiRequestBody)
//       });

//       const data = await response.json();
//       console.log(data);

//       if (response.ok) {
//         const chatGptMessage = data.choices[0].message.content;

//         setMessages([...chatMessages, {
//           content: chatGptMessage,
//           sentTime: "just now",
//           sender: "ChatGPT"
//         }]);
//       } else {
//         console.error("API response error:", data);
//       }

//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setIsTyping(false);
//     }
//   }

//   return (
//     <div className="App">
//       <div style={{ position: "relative", height: "800px", width: "700px" }}>
//         <MainContainer>
//           <ChatContainer>       
//             <MessageList 
//               scrollBehavior="smooth" 
//               typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
//             >
//               {messages.map((message, i) => {
//                 console.log(message);
//                 return (
//                   <Message 
//                     key={i} 
//                     model={{
//                       message: message.content,
//                       sentTime: message.sentTime,
//                       sender: message.sender,
//                       direction: message.sender === "user" ? "outgoing" : "incoming"
//                     }}
//                   />
//                 );
//               })}
//             </MessageList>
//             <MessageInput placeholder="Type message here" onSend={handleSend} />        
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "sk-proj-KsUTYyhSRP4k3900dVOpT3BlbkFJbdJkaqY1u3GzTPdBfuTD";

const systemMessage = {
  "role": "system", 
  "content": "Explain things like you're talking to a software professional with 2 years of experience."
};

function App() {
  const [messages, setMessages] = useState([
    {
      content: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      content: message,
      sentTime: "just now",
      sender: "user",
      direction: 'outgoing'
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.content };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", 
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        if (data.choices && data.choices.length > 0) {
          const chatGptMessage = data.choices[0].message.content;

          setMessages([...chatMessages, {
            content: chatGptMessage,
            sentTime: "just now",
            sender: "ChatGPT"
          }]);
        } else {
          console.error("No choices in response:", data);
        }
      } else {
        console.error("API response error:", data);
      }

    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message);
                return (
                  <Message 
                    key={i} 
                    model={{
                      message: message.content,
                      sentTime: message.sentTime,
                      sender: message.sender,
                      direction: message.sender === "user" ? "outgoing" : "incoming"
                    }}
                  />
                );
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;



