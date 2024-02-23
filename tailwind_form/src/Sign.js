import React from 'react'
import { useState } from 'react';
import p5 from "./p8.jpg";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Sign = () => {

  const [content,setContent] = useState({
    firstname:"",surname:"",email:"",password:"",confirmpassword:""
  });
  const[disable, setDisable]=useState('typing');


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
    setDisable('submitted');
    Swal.fire({
      title: "Register",  
      icon: "success",
    });
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
              <input type="password" name="confirmpassword" onChange={handleInput} placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full h-12 rounded-md"/>
            </div>
            <div className="mt-5">
              {/* <input type="checkbox" className="border border-gray-400 mr-2" /> */}
              <span>
              By clicking Register , you agree to our <a href="#2" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#1" className="text-purple-500 font-semibold">Privacy Policy</a> 
              </span>
            </div>
            <div className="mt-5 mb-5">
              <button className="w-full bg-black py-3 text-center text-white rounded-md disabled:bg-gray-300 disabled:text-black"
               onClick={handleSubmit}  disabled={content.email.length===0 || 
                content.password.length===0 || content.firstname.length===0 ||content.surname.length===0 || content.confirmpassword.length===0 ||                         
                disable==='submitted'} >Register Now</button>
            </div>
            <div className="text-center text-gray-400 ">
           Already have an account?
           <span className='font-bold text-black ml-2 hover:underline' ><Link to="/">Login</Link></span>
           </div>
          </form>
        </div>
      </div>
  </div>
  

  )
}

export default Sign