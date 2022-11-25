import React from 'react';
import '../chat-style/Chat.css';
import ChatHeader from './ChatHeader';
export default function Chat() {
  return (
    <div className='chat'>
        <ChatHeader/>

        <div className="chat_message">

        </div>
        <div className="chat-input">
            
        </div>
    </div>
  )
}
