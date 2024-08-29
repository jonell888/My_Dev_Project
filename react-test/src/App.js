import './App.css';
import React, {useState} from 'react';
import Navbar from './Navbar';
import Input from './Input';
import { useState } from 'react';

let id = 1;
function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = {id, title}
    setPosts([newPost, ...posts])
    id += 1;
  }
  return (
    <div className="App">
    <Navbar />
    <Input addPost={addPost}/>
    </div>
  );
}
 
export default App;
