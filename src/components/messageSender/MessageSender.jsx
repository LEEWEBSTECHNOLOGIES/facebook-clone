import { Avatar } from "@mui/material";
import "./messageSender.css";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { useState } from "react";
import { useStateValue } from "../../StateProvider";

const MessageSender = () => {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Some clever db stuff
        setInput("");
        setImageURL("");

    };
  return (
    <div className="messageSender">
        <div className="messageSender__top">
            <Avatar src={user.photoURL} />
            <form>
                <input className="messageSender__input" value={input} onChange={(e) => setInput(e.target.value)} placeholder={`What's on your mind, Ali?, ${user.displayName}`} />
                <input value={imageUrl} onChange={(e) => setImageURL(e.target.value)} placeholder="image URL (Optional)" />
                <button onClick={handleSubmit} type="submit">Hidden Submit</button>
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <Videocam style={{color: "red"}} />
                <h3>Live video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibrary style={{color: "green"}} />
                <h3>Photo/video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticon style={{color: "orange"}} />
                <h3>Feeling/activity</h3>
            </div>
            
        </div>
    </div>
  )
}

export default MessageSender