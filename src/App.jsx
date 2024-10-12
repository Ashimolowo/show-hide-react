import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const showHideDiv = () => {
    
   const user = document.querySelector(".user-details");
   if(user.style.display === "block"){
    user.style.display ="none"
   }else{
    user.style.display = "block"
   }
    
   }

  return (
    <>
      <div className="card">
      <div className="user-details">
        <h1> i am full stack dev</h1> 
      </div>
      <button onClick={showHideDiv}>
        Click here to see more details
        </button>
      </div>  
    </>
  )
}

export default App
