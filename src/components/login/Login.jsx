import "./login.css";
import logo from "../../images/facebook_logo.png";
import logo2 from "../../images/Facebook-Logo.wine.svg";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
        .then(result => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className="login">
        <div className="login__logo">
           <img src={logo} alt="facebook_logo" />
           <img src={logo2} alt="facebook__logo" />
        </div>
        <Button className="btn" type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login