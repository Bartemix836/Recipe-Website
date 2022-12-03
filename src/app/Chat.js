import React, { useEffect, useState } from 'react';
import '../styles/chat-style/Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { selectUser } from '../features/userSlice';
import db from "../firebase";
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

export default function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
    });

    setInput("");
};

  return (
    <div className='chat'>
        <ChatHeader channelName ={channelName} />

        <div className="chat-message">
            {messages.map((message)=>(
                <Message
                key={message.key}
                timestamp={message.timestamp}
                message={message.message}
                user={message.user}
                />
            ))}
        </div>
        <div className="chat-input">
            <AddCircleRoundedIcon className='plus-input'  fontSize="medium"/>
            <form>
                <input 
                 value = {input} 
                 disabled = {!channelId}
                 onChange = {(e)=> setInput(e.target.value)}
                 placeholder="Write your message"/>
                
                <button
                disabled={!channelId} 
                className='chat-btn'
                type='submit'
                onClick = {sendMessage}>
                Send
                </button>    
            </form>
        </div>
    </div>
  )
}
