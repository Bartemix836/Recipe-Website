import React from 'react'
import "../Assets/chat-style/Chat.css";
import BookIcon from '@mui/icons-material/Book';
import { useDispatch } from 'react-redux';
import {setChannelInfo } from '../features/appSlice';


 function ChannelListElement({id, channelName}) {
  const dispatch = useDispatch(); 
  
  return <div 
  className='ChannelList' 
  onClick ={()=> 
    dispatch
        (setChannelInfo({
            channelId: id,
            channelName: channelName,
            })
        )
    }>
    
        <h4>
            <span className='Channel_bookimg'><BookIcon/></span>{channelName}
        </h4>
    </div>
    
}

export default ChannelListElement;