import { Avatar } from "@mui/material";
import "./messageSender.css";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";

const MessageSender = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };
  return (
    <div className="messageSender">
        <div className="messageSender__top">
            <Avatar />
            <form action="">
                <input type="text" placeholder="What's on your mind, Ali?" />
                <input type="text" placeholder="image URL (Optional)" />
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