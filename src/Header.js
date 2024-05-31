import "./Header.css";
import logo from "./asets/logo.svg";
import avatar from "./asets/avatar.JPG";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
        
        <img src={logo} className="header_logo" alt="youtube" />
        </Link>
      </div>
      <div className="header_input">
        <input onChange={e => setInputSearch(e.target.value) } value={inputSearch} placeholder="Search" type="text"  />
        <Link to={`/search`}>
        <SearchIcon className="header_inputButton"/>
        </Link>
      </div>
      <div className="header_right">
        <VideoCallIcon className="header_right" sx={{width: "30px", height: "30px"}} />
        <NotificationsIcon className="header_right" sx={{width: "30px", height: "30px"}} />
        <Avatar alt="kaliyappan" src={avatar} sx={{width: "35px", height: "35px"}} />
      </div>
    </div>
  );
}

export default Header;
