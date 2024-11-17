import "./header.css";
import logo from "../../images/facebook_logo.png";
import { Apps, Group, Home, NotificationsActive, OndemandVideo, People, Search, Storefront } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import Icon from '@mdi/react';
import { mdiFacebookMessenger } from '@mdi/js';

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <img className="logo" src={logo} alt="" />
            <div className="header__input">
               <Search />
               <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
        <div className="header__center">
            <div className="header__option header__option--active">
                <Home fontSize="large" />
            </div>
            <div className="header__option">
                <People fontSize="large" />
            </div>
            <div className="header__option">
                <OndemandVideo fontSize="large" />
            </div>
            <div className="header__option">
                <Storefront fontSize="large" />
            </div>
            <div className="header__option">
                <Group fontSize="large" />
            </div>            
        </div>
        <div className="header__right">
            <IconButton className="apps">
                <Apps />
            </IconButton>
            {/* <IconButton>
                <Forum />
            </IconButton> */}
            <IconButton>
            <Icon path={mdiFacebookMessenger} size={1} />
                {/* <NotificationsActive /> */}
            </IconButton>
            <IconButton>
            <NotificationsActive />
            </IconButton>
            {/* <IconButton>
                <ExpandMore />
            </IconButton> */}
            <div className="header__info">
                <Avatar />
                <h4>Mark Zuckerberg</h4>
            </div>
            {/* <IconButton>
                <Add />
            </IconButton> */}
        </div>
    </div>
  )
}

export default Header