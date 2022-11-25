import React from 'react'
import "./style-sidebar/channellist.css"
import BookIcon from '@mui/icons-material/Book';

 function ChannelListElement(id, channel) {
  return <div className='ChannelList'>
        <h4><span class="Channel_bookimg"><BookIcon/></span> Title Channel</h4>
    </div>
  
}
export default ChannelListElement;