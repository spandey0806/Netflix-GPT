import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn , setIsSignIn] = useState(true);
    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div >
       <Header/>
       <div  className="absolute">
         <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt ="logo"
          />
       </div>

       <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
        <h1 className ="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      {
        !isSignIn && (
            <input type ="text" placeholder='Full Name' className="p-2 my-4  w-full bg-gray-800"   />
        )
      }
        <input type ="text" placeholder='Email Address' className="p-2 my-4  w-full bg-gray-800"   />
        <input type ="text" placeholder ='Password' className ="p-2 my-4  w-full bg-gray-800"/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p class="py-4 cursor-pointer" onClick={toggleSignIn}>
        {isSignIn ? "New to Netflix ? Sign Up Now" : "Already registered ? Sign In Now"}  
             </p>
      
       </form>
    

   </div>
  )
}

export default Login