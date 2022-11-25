import React from "react";
import ChannelListElement from "./ChannelListElement";
import'./style-sidebar/sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@mui/material/Avatar';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar(){
    return (
        <div className="sidebar">
            <h2>Sidebar Section</h2>
            <div className="siedebar_top">
                <h3>RecipeBlogs</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="channels">
                    <div className="channels-title">
                        <div className="channel-title">
                            <ExpandMoreIcon/>
                            <h4>Channel Contain</h4>
                        </div>
                        <AddIcon className="RightSide_addChannel"/>
                    </div> 
                    
                    <div className="channels-list">
                        <ChannelListElement/>
                        <ChannelListElement/>
                        <ChannelListElement/>
                    </div>
            </div> 

            <div className="voice-section">
                 <SignalWifi4BarIcon
                 className="voiceIcon"
                 fontSize ="large"
                 />

                <div className="voice-info">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>

            <div className="user-profile">
                <Avatar src="/abou1.png"
                />
                <div className="profile-info">
                    <h3>User Name</h3>
                    <p>#myId</p>
                </div>
                <div className="profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;