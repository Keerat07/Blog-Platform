import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handle=async(e)=>{
    e.preventDefault();

    const userData={username,password};

    try {
      const request=await fetch("http://localhost:4000/login",{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(userData),
      })
      const data= request.json();
      console.log("data is: "+{username}+" "+{password});
    } 
    
    catch (error) {
      console.log("Internal error "+error);
    }

  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handle}>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
