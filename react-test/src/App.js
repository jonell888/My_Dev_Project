import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';

let id = 1;
function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title }
    setPosts([newPost, ...posts])
    id += 1;
  }
  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => 
      (<Post key={post.id} id={post.id} title={post.title} />
         
      ))}
    </div>
  );
}

export default App;
