import React from 'react'
import '../styles/chatheader-style/chatheader.css';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import BookIcon from '@mui/icons-material/Book';


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

            <HelpRoundedIcon onClick={()=>setShow(!show)}/>
             
            {
                show? <p></p>:<div className='help-info'> 
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