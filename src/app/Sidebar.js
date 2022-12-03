import React, { useEffect, useState } from "react";
import ChannelListElement from "./ChannelListElement";
import'../styles/style-sidebar/channellist.css';
import'../styles/style-sidebar/sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import logo from '../logo.png';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function Sidebar(){
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);
    useEffect (()=>{
        db.collection('channels').onSnapshot((snapshot)=>
            setChannels(
                snapshot.docs.map((doc) =>({
                id: doc.id,
                channel: doc.data(),
            }))
          )
        );
    }, []);

    const handleAddChannel = () =>{
        const channelName = prompt("Please entry channel name");
        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    };

    return (
        <div className="sidebar">
            
            <div className="siedebar_top">
            <img className="logo" src={logo} alt=""/><h2>Recipes<span>AppChat</span></h2>
            </div>
            <div className="channels1">
                    <div className="channels-title">
                        <div className="channel-title">

                            <h3>Our Channels</h3>
                        </div>
                        <AddIcon onClick= {handleAddChannel} className="RightSide_addChannel"/>
                    </div> 
                    
                    <div className="channels-list">
                        {channels.map(({id,channel})=>(
                            <ChannelListElement
                            key={id}
                            id={id}
                            channelName={channel.channelName}
                            />
                        ))}
                    </div>
            </div> 


            <div className="user-profile">
                

                <div className="profile-info">
                    <h3>{user.displayName}</h3>
                    <p>#{user.id.substring(0,5)}</p>
                    <div className="img-avatar"><Avatar src={user.photo} /></div>
                    <ExitToAppOutlinedIcon className="logout"
                        onClick ={()=>auth.signOut()}
                    />
                </div>
            </div>
        </div>
    );
}


export default Sidebar;