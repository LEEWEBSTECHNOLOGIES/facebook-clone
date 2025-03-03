import { Avatar } from "@mui/material";
import "./post.css";
import { AccountCircle, ChatBubbleOutline, ExpandMore, NearMe, ThumbUp } from "@mui/icons-material";

const Post = ({profilePic, image, username, timestamp, message}) => {
  return (
    <div className="post">
        <div className="post__top">
            <Avatar className="post__avatar" src={profilePic} />
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
        <div className="post__bottom">
            <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt="" />
        </div>
        <div className="post__options">
            <div className="post__option">
                <ThumbUp />
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutline />
                <p>Comment</p>
            </div>
            <div className="post__option">
                <NearMe />
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircle />
                <ExpandMore />
            </div>
            
        </div>
    </div>
  )
}

export default Post