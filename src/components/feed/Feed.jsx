import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import Storyreel from "../storyreel/Storyreel";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
        <Storyreel />
        <MessageSender />
        <Post />
    </div>
  )
}

export default Feed