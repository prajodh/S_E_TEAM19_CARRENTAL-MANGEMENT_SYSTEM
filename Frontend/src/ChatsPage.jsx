import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  // Inline styles for the header and chat container
  const headerStyle = {
    padding: '10px 20px',
    background: 'orange', // Orange strip at the top
    color: 'white',
    fontSize: '24px',
    fontFamily: 'Avenir, sans-serif',
  };

  const chatContainerStyle = {
    height: 'calc(100vh - 40px)', // Adjust height to account for header
    overflow: 'hidden',
  };

  // Make sure props.user has username and secret values
  if (!props.user || !props.user.username || !props.user.secret) {
    return <div>Loading...</div>; // Or any other loading state or error handling
  }

  return (
    <div style={{ height: '100vh' }}>
      {/* Header */}
      <div style={headerStyle}>HPassRentals.Inc</div>

      {/* Chat Window */}
      <div style={chatContainerStyle}>
        <PrettyChatWindow
          projectId="1d69dd12-2ee2-47f1-b1b1-6544ac785a70"
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default ChatsPage;
