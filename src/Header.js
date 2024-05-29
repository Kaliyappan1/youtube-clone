import "./Header.css";
import logo from "./asets/logo.svg";
import avatar from "./asets/avatar.JPG";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon className="header-menu" />
        <img src={logo} className="header_logo" alt="youtube" />
      </div>
      <div className="header_input">
        <input type="text" />
        <SearchIcon className="header_inputButton"/>
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
