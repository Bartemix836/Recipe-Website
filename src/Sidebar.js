import React from "react";
import ChannelListElement from "./ChannelListElement";
import'./style-sidebar/sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

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
        </div>
    );
}

export default Sidebar;