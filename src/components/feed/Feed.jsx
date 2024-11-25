import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import Storyreel from "../storyreel/Storyreel";
import "./feed.css";
import db from "../../firebase";
import { useEffect, useState } from "react";
// import imf from "../../images/imf.jpg";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id, data: doc.data()
      }))
    ));
  }, []);
  return (
    <div className="feed">
        <Storyreel />
        <MessageSender />
        {posts.map((post) => (
           <Post key={post.id}
           profilePic={post.data.profilePic}
           message={post.data.message}
           timestamp={post.data.timestamp}
           username={post.data.username}
           image={post.data.image}  
            />
        ))}      
    </div>
  )
}

export default Feed