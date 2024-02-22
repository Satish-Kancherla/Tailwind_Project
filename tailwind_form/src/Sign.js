import React from 'react'
import { useState } from 'react';
import p5 from "./p8.jpg";
import axios from "axios";

const Sign = () => {

  const [content,setContent] = useState({
    firstname:"",surname:"",email:"",password:""
  });

  let name,value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setContent({...content,[name]:value});
}
  
const handleSubmit =(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8083/sign',content)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

  return (

    <div className="min-h-screen py-16 bg-gray-100" >
      <div className="flex flex-col lg:flex-row w-9/12 lg:w-7/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div    >
          <img className='w-full  lg:w-[500px] h-full  rounded-l-2xl block object-cover relative ' src={p5} alt='' />
            {/*<h1 className="text-black text-3xl mb-3 absolute top-96 left-[420px] bg-gray-500">Welcome</h1>
         <div>
            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#3" className="text-purple-500 font-semibold">Learn more</a></p>
          </div> */}
        </div>
        <div className="w-full lg:w-1/2 py-16 px-12">
          <h2  className="text-3xl mb-4">Register</h2>
          <p className="mb-4">
            Create your account. It’s free and only take a minute
          </p>
          <form action="#">
            <div className="grid grid-cols-2 gap-5 text-md">
              <input type="text"  name="firstname" onChange={handleInput} value={content.firstname}  placeholder="Firstname" className="border border-gray-400 py-1 px-2 h-12 rounded-md" />
              <input type="text"  name="surname" onChange={handleInput} value={content.surname} placeholder="Surname" className="border border-gray-400 py-1 px-2 h-12 rounded-md" />
            </div>
            <div className="mt-7">
              <input type="text" name="email" onChange={handleInput} value={content.email} placeholder="Email" className="border border-gray-400 py-1 px-2 w-full h-12 rounded-md" />
            </div>
            <div className="mt-7">
              <input type="password" name="password" onChange={handleInput} value={content.password} placeholder="Password" className="border border-gray-400 py-1 px-2 w-full h-12 text-md rounded-md"/>
            </div>
            <div className="mt-7">
              <input type="password"  placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full h-12 rounded-md"/>
            </div>
            <div className="mt-5">
              <input type="checkbox" className="border border-gray-400 mr-2" />
              <span>
                I accept the <a href="#2" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#1" className="text-purple-500 font-semibold">Privacy Policy</a> 
              </span>
            </div>
            <div className="mt-5">
              <button className="w-full bg-black py-3 text-center text-white rounded-md" onClick={handleSubmit}>Register Now</button>
            </div>
          </form>
        </div>
      </div>
  </div>
  

  )
}

export default Sign