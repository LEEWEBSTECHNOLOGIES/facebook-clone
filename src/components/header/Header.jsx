import "./header.css";
import logo from "../../images/facebook_logo.png";
import { Add, Group, Home, OndemandVideo, People, Search, Storefront } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <img src={logo} alt="" />
            <div className="header__input">
               <Search />
               <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
        <div className="header__middle">
            <div className="header__option">
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
            <div className="header__info">
                <Avatar />
                <h4>Ali Ajibade</h4>
            </div>
            <IconButton>
                <Add />
            </IconButton>
        </div>
    </div>
  )
}

export default Header