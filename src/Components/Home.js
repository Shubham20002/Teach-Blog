import { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom';

function Home() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db,"Blog"), (snapshot) => {
       
        const Posts =snapshot.docs.map(doc => {
         return {id:doc.id,
          ...doc.data()}
        })
       console.log(Posts)
       setPosts(Posts);
      })
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Shubham</div>

      {Posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.Title}</h3>
          </Link>

          <p>{post.SubTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
