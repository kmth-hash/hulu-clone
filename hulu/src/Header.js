import React from 'react';
import LiveTvIcon from "@material-ui/icons/LiveTv";
import HomeIcon from "@material-ui/icons/Home";
import FlashIcon from "@material-ui/icons/FlashOn";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="header">
                
                <div className="header_icons">
                    <div className="header_icon">
                        <HomeIcon />
                        <p>Home</p>
                    </div>
                    <div className="header_icon">
                    <FlashIcon />
                        <p>Nothing</p>
                    </div>
                    <div className="header_icon">
                    <LiveTvIcon />
                        <p>Nothing</p>
                    </div>
                    <div className="header_icon">
                    <VideoLibraryIcon />
                        <p>Nothing</p>
                    </div>
                    <div className="header_icon">
                    <SearchIcon />
                        <p>Nothing</p>
                    </div>
                    <div className="header_icon">
                    <PersonOutlineIcon />
                        <p>You Guessed it</p>
                    </div>
                                        
                </div>
                <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="logo" />
                
            </div>
        </div>
    )
}

export default Header
