import React, { useState , useEffect } from 'react'

const Get = () => {
  
    const[data1,setData]=useState([]);

    const res=async()=>{
        try {
            const response=await fetch("http://localhost:4000");

            const data=await response.json();
            
            console.log("Hellow")

            if(data.Success===true){
                
                setData(data)
            }
            else{
                console.log("No data found");
            }
        } 
        catch (error) {
            console.log("Error occured "+error)
        }
    };

    useEffect(() => {
        res();
    }, []);
  
    return (
    <div>
      <h1>List of the users</h1>
      <ul>
      {data1.length > 0 ? (
          data1.map((user, index) => (
            <li key={index}>
              <strong>Username:</strong> {user.username}, <strong>Password:</strong> {user.password}
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  )
}

export default Get
