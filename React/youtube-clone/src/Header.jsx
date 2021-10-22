import React, { createContext, useState } from 'react'
import Menu from "@material-ui/icons/Menu"
import Search from '@material-ui/icons/Search'
import Notifications from '@material-ui/icons/Notifications'
import { Apps, VideoCall, Mic } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState("");

    // const searching = inputSearch;
   

    return (
        <>
        {/* <Searching.Provider value={searching}>
            */}

   
        <div className="header">
            <div className="header__left">

                <IconButton>
                    <Menu />
                </IconButton>

                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube_Logo" />
                </Link>


            </div>
            <div className="header__center">
                <div className="header__input">
                    <input type="text" placeholder="Search" value={inputSearch} onChange={(e) => { setInputSearch(e.target.value) }} />

                    <Link to={`/search/${inputSearch}`}>
                        <Search className="header__inputButton" />

                       

                    </Link>


                </div>
                <Mic className="header__inputButtonMic" />
            </div>


            <div className="header__icons">

                <IconButton>
                    <VideoCall className="header__icon" />
                </IconButton>
                <IconButton>
                    <Apps className="header__icon" />
                </IconButton>
                <IconButton>
                    <Notifications className="header__icon" />
                </IconButton>

                <Avatar alt="user_logo" />

            </div>

        </div>
         
        {/* </Searching.Provider> */}

</>
    )
}

export default Header;
// export  const Searching = createContext();