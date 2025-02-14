import React, { useState } from 'react'

const Home = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handle=async (e)=>{
        e.preventDefault();

        const username1={username,password};
        try {
            const response=await fetch("",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(username1),
            });

            const data=await response.json();
            console.log("Response from backend:",data);

        } 
        catch (error) {
            console.log("Internal error "+error);
        }

    }

  return (
    <form onSubmit={handle}>
      <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button type='submit'>submit</button>
    </form>
  )
}

export default Home
