// import React from 'react';

// const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     console.log(message);
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions: {},
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
  }
}

export default MessageParser;