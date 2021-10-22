import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard';


function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>
                Recommended
            </h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    image="https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    title="How to manage your daily lifestyle"
                    channel="Lifestyle"
                    views="292K"
                    timestamp="4 Days ago"
                    channelImage="https://images.unsplash.com/photo-1501747315-124a0eaca060?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                />
                <VideoCard
                    image="https://images.unsplash.com/photo-1564419429381-98dbcf916478?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80"
                    title="Let's dive UnderWater"
                    channel="UnderWater SEA"
                    views="25M"
                    timestamp="1 Month ago"
                    channelImage="https://images.unsplash.com/photo-1581997328000-7eba22a89b45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?car"
                    title="Fastest car in the world"
                    channel="Cars dealer"
                    views="928k"
                    timestamp="11 months"
                    channelImage="https://source.unsplash.com/1600x900/?cars"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?coding,software"
                    title="Learn software developement fastest way possible"
                    channel="Coderss"
                    views="99M"
                    timestamp="5 years ago"
                    channelImage="https://source.unsplash.com/1600x900/?software,coding"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?house,home"
                    title="Buy a good home for your family"
                    channel="House"
                    views="444k"
                    timestamp="5 months ago"
                    channelImage="https://source.unsplash.com/1600x900/?home"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?police,army"
                    title="Security"
                    channel="FBI available"
                    views="53k"
                    timestamp="1 year ago"
                    channelImage="https://source.unsplash.com/1600x900/?army"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?cloths,"
                    title="Fashion at its peak"
                    channel="Fashion forever"
                    views="193k"
                    timestamp="3 months ago"
                    channelImage="https://source.unsplash.com/1600x900/?wearable"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?iceburg,antartica,snow"
                    title="Ice is fun"
                    channel="Ice Lover"
                    views="11k"
                    timestamp="2 years ago"
                    channelImage="https://source.unsplash.com/1600x900/?nature"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?monument"
                    title="Wonderful Monument"
                    channel="History Reveled"
                    views="21M"
                    timestamp="8 years ago"
                    channelImage="https://source.unsplash.com/1600x900/?historical"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?nature,fire"
                    title="Fire in Jungle"
                    channel="Nature degrading"
                    views="45k"
                    timestamp="4 years ago"
                    channelImage="https://source.unsplash.com/1600x900/?fire,nature"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?cosmos,space"
                    title="Exploring cosmos"
                    channel="The Untravelled"
                    views="23M"
                    timestamp="2 years ago"
                    channelImage="https://source.unsplash.com/1600x900/?mars"
                />
                 <VideoCard
                    image="https://source.unsplash.com/1600x900/?teach,teacher,learn"
                    title="Let's learn something new"
                    channel="Learning forever"
                    views="23k"
                    timestamp="1 day ago"
                    channelImage="https://source.unsplash.com/1600x900/?teacher"
                />


            </div>
        </div>
    )
}

export default RecommendedVideos
