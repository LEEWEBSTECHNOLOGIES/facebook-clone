import "./header.css";
import logo from "../../images/facebook_logo.png";
const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <img src={logo} alt="" />
        </div>
        <div className="header__middle"></div>
        <div className="header__right"></div>
    </div>
  )
}

export default Header