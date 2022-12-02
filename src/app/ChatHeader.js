import React, {useState} from 'react'
import '../styles/chatheader-style/chatheader.css';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
// import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import BookIcon from '@mui/icons-material/Book';
// import { Info } from '@material-ui/icons';

function ChatHeader({channelName}) {
  const [show, setShow] = React.useState(true)          
  return (
    <div className='chat-header'>
        <div className="chatHeaderLeft">
            
            <h3>
                <span className="chaHeaderName-hash"><BookIcon/></span>
                {channelName}
            </h3>
        </div>
        <div className="chatHeaderRight">
            {/* <NotificationsIcon/>
            <EditLocationRoundedIcon/>
            <PeopleAltRoundedIcon/> */}

            {/* <div className="chat_search">
                <input placeholder= 'Search Recipe or People'/>
                 <SearchRoundedIcon /> }
            </div>
            <SendRoundedIcon/> */}

            <HelpRoundedIcon onClick={()=>setShow(!show)}/>
             
            {
                show? <p></p>:<div className='help-info'> 
                      {/* <div className="btn-close">X</div> */}
                      <p>It is a platform where you can exchange recipes with others users. 
                        The platform consist of tree channels where you can divorce a lot of new recipes, 
                        which are simple and tasteful. 
                        If you know how to work our app you can close this window by click again "Help" button</p>
                        </div> 
            }
           
        </div>
    </div>
  )
}

export default ChatHeader