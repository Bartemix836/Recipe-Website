import React from 'react';
import '../Assets/message-style/message.css';
import Avatar from '@mui/material/Avatar';


function Message({timestamp, user, message}) {
  return (
    <div className='message'>
       <Avatar src={user.photo}/> 
        <div className='message-info'>
            <h4>{user.displayName}
                <span className='message-timestemp'>
                {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>

            <p>{message}</p>
            
        </div>
    </div>
  )
}

export default Message;