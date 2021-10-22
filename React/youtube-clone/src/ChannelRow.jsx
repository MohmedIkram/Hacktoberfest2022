import { Avatar } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import React from 'react'
import "./ChannelRow.css";


function ChannelRow({image, channel, noOfVideos, description, verified, subs}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
            <h4>
                {channel}{verified &&<CheckCircleOutline/>}
            </h4>
            <p>
                {subs} Subscribers ~{noOfVideos} Videos
            </p>
            <p>
                {description}
            </p>
            </div>
        </div>
    )
}

export default ChannelRow
