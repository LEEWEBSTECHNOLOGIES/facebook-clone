import "./header.css";
import logo from "../../images/facebook_logo.png";
import { Group, Home, OndemandVideo, People, Search, Storefront } from "@mui/icons-material";

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
                <Home />
            </div>
            <div className="header__option">
                <People />
            </div>
            <div className="header__option">
                <OndemandVideo />
            </div>
            <div className="header__option">
                <Storefront />
            </div>
            <div className="header__option">
                <Group />
            </div>
            
        </div>
        <div className="header__right"></div>
    </div>
  )
}

export default Header