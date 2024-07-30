import React from 'react';
import Chatbot from './Chatbot.jsx';
import './module.css';

const App = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
