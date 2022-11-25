import React from 'react'
import '../chatheader-style/chatheader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
function ChatHeader() {
  return (
    <div className='chat-header'>
        <div className="chatHeaderLeft">
            <h3>
                <span className="chaHeaderName-hash">#</span>
                Test Channel Name
            </h3>
        </div>
        <div className="chatHeaderRight">
            <NotificationsIcon/>
            <EditLocationRoundedIcon/>
            <PeopleAltRoundedIcon/>

            <div className="chat_search">
                <input placeholder= 'Search Recipe or People'/>
                <SearchRoundedIcon />
            </div>
            <SendRoundedIcon/>
            <HelpRoundedIcon/>
        </div>
    </div>
  )
}

export default ChatHeader