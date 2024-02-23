import React from 'react'
import { useState} from 'react';
import axios from 'axios';
import p7 from "./Assets/p7.jpg"
import gg from "./Assets/google.png";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const[data,setData] = useState({
        email:"",password:"" 
    });
    const[disable, setDisable]=useState('typing');
    
    const navigate =useNavigate();

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setData({...data,[name]:value});
    }


  

  //   const handleSubmit = async()=>{
  //     try{
  //         const result = await axios.post('http://localhost:8083/login',data);
  //         setData(result.data);
          
  //         Swal.fire({
  //           title: "Login Success",  
  //           icon: "success",
  //         })
  //     } catch (err) {
        
  //       Swal.fire({
  //         title: "No Record",  
  //         icon: "error",
  //       })
  //     }
  // }


    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8083/login',data)
        .then(res => {
          console.log(res)
          if(res.data  === "Login Success"){
            navigate('/home')
          } else{
            Swal.fire({
              title: "No Record",  
              icon: "error",
            });
          }
       
         })
         .catch(err => console.log(err));
         setDisable('submitted');
          
    }


  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-8 ">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text" name="email" id="email" onChange={handleInputs}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                          
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password" name="password" id="password" onChange={handleInputs}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              {/* <input type="checkbox" name="ch" id="ch" className="mr-2" /> */}
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button onClick={handleSubmit}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border
             hover:border-gray-300  disabled:bg-gray-300 disabled:text-black "
            disabled={data.email.length===0 || 
              data.password.length===0 ||                             
              disable==='submitted'}
          >Sign in </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src={gg} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Dont'have an account?
            <span className="font-bold text-black"><NavLink to="/signup">Sign up for free</NavLink></span>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div className="relative">
          <img src={p7} alt="img"
            className="w-[400px] h-full  rounded-r-2xl block object-cover" />
          {/* <!-- text on image  --> */}
          {/* <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl"
              >We've been using Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div> */}
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Login