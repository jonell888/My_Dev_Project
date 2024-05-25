import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name,setname] = useState("Chaiwat")

  const user ={
    fiisName: "john",
    lastName: "Doe",
    imgPic: "https://images.unsplash.com/photo-1581363300282-94a5c7aa2390?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  }
  return (
    <div className="App">
      <h1>Welcome to my app </h1>
      <p>My name is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} width="150" heigth= "150" alt={user.firstName}/>
      <p>{count}</p>
      <MyButton />
    </div>
  );
}

export default App;
