import "./login.css";
import logo from "../../images/facebook_logo.png";
import { Button } from "@mui/material";

const Login = () => {
    const signIn = () => {
        // sign in...
    }
  return (
    <div className="login">
        <div className="login__logo">
           <img src={logo} alt="facebook_logo" />
           <h3 className="facebook">facebook</h3>
        </div>
        <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login