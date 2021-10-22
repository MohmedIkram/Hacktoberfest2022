import { TuneOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow';
// import {Searching} from './Header';


function SearchPage() {
    // const searchResult= useContext(Searching);
    // console.log(searchResult);

    return (
        <div className="searchPage">
           <div className="searchPage__filter">
            <TuneOutlined/>
            <h2>
                filter
            </h2>
           </div>
           <hr/>

           <ChannelRow
               image="https://source.unsplash.com/1600x900/?lucifer"
               channel="My channel"    //{searchResult}
               verified
               subs="1M"
               noOfVideos="786"
               description="You can find awesome programmming lessions here! Also, expect programming tips and tricks that will take your coding skills to the...."
           />
           <hr/>

           <VideoRow
           
           views="321K"
           subs="1M"
           description="Talk is cheap, Show me the code...."
           channel="Dr.Drunkenstein"
           title="This is how you can build a YouTube Clone" 
           image="https://source.unsplash.com/246x138/?youtube"
           timestamp="3 Days ago"         
            />
        </div>
    )
}

export default SearchPage;


