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
    db.collection("post").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id, data: doc.data
      })))
    ))  
  })
  return (
    <div className="feed">
        <Storyreel />
        <MessageSender />
        <Post profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" message="Wow, this works" timestamp="This is s timestamp" username="Mark Zuckerberg" image="https://images.unsplash.com/photo-1731432248686-af238c870acc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Post profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" message="Wow, this works" timestamp="This is s timestamp" username="Mark Zuckerberg" image="https://images.unsplash.com/photo-1731432248686-af238c870acc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Post profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" message="Wow, this works" timestamp="This is s timestamp" username="Mark Zuckerberg" image="https://images.unsplash.com/photo-1731432248686-af238c870acc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Post profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" message="Wow, this works" timestamp="This is s timestamp" username="Mark Zuckerberg" image="https://images.unsplash.com/photo-1731432248686-af238c870acc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default Feed