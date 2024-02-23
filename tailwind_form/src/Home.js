import React from 'react'
import { useState,useEffect } from 'react';

import v1 from "./Assets/v2.mp4"
import p1 from "./Assets/p1.jpg"
import p2 from "./Assets/p2.jpg"
import p3 from "./Assets/p3.jpg"
import p4 from "./Assets/p4.jpg"
import p5 from "./Assets/p5.jpg"
import p6 from "./Assets/p6.jpg"
import p7 from "./Assets/p7.jpg"
import p8 from "./Assets/p8.jpg"
import p9 from "./Assets/p9.jpg"
import p10 from "./Assets/p10.jpg"
import p11 from "./Assets/p11.jpg"


const Home = () => {

  const[content,setContent] = useState({
    employeeid: "",loanamount: "",loantenure: "",reasonforloan: ""
  });
  const [theme, setTheme] = useState(null);

  let name,value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setContent({...content,[name]:value});
  }


  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <div>
              <div className=" bg-white dark:bg-black ">

        <div className='flex w-8/12 justify-between items-center h-20  absolute z-10 text-black'>
      

      <div className='h-screen   flex justify-center items-center'>
        <h1 className='font-bold text-5xl m-24 text-blue-900'>ISLANDS</h1>
      </div>
      <ul className='flex gap-10 text-2xl text-blue-900 ml-96'>
      <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <button className="bg-black dark:bg-white dark:text-black font-bold text-white p-4 flex ml-60 rounded-full" onClick={handleThemeSwitch}>
      {theme === "dark" ? "light" : "dark"}
      </button>
    
       
      
      </div>
    <div>
    <div className='w-full h-screen relative sm:w-full'>
        
        <video className='w-full h-full object-cover' src={v1}  autoPlay loop muted/>
       
        <div className='absolute top-[500px]'>
        <h1 className='font-bold text-3xl mt-10 flex justify-center text-yellow-500'>
          TAILOR-MADE HOLIDAYS WITH PETTITTS TRAVEL</h1>
        <p className='font-bold text-xl ml-40 mt-5 mr-40 text-center text-white'>
          With over 35 years’ experience, Pettitts Travel specialises in creating memorable holidays around the globe. As an independent tour operator and travel agency, we can help to both craft or source your perfect holiday and pride ourselves in providing the very highest level of service and advice.</p>

        </div>
    </div>
    </div>
    
    <div className='flex-col text-center'>
        <h1 className='font-bold text-5xl text-blue-900 mt-16 tracking-wide'>All-Inclusive Views</h1>
        <p className='mb-10 text-xl mt-2 tracking-wide dark:text-white '>On the Caribbean's Best Views</p>
    </div>
    <div className='flex justify-center'>
        <img className='w-[500px] h-[612px]' src={p2} alt=''/>
        <div className='flex-col ml-3' >
            <img className='w-[300px] h-[300px] mb-3' src={p4} alt='' />
            <img className='w-[300px] h-[300px]' src={p3} alt='' />
        </div>
        <div className='flex-col ml-3' >
            <img className='w-[300px] h-[300px] mb-3' src={p1} alt='' />
            <img className='w-[300px] h-[300px]' src={p5} alt='' />
        </div>
    </div>
    <div className='flex text-center justify-center mt-10 mx-28'>
        <div>
            <h1 className='font-bold text-3xl text-blue-900 mb-5'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
            <p className='text-xl text-center dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.It is a long established fact that a reader will be distracte as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
       
        
    </div>
    <div className='flex justify-center text-center pt-20 pb-5 gap-5 mt-10 bg-gray-100 dark:bg-slate-900 '>
        <div className='w-[400px] h-[500px] bg-white border-black-100   rounded-lg'>
        <img className='w-[400px] h-[380px]  rounded-tl-lg rounded-tr-lg' src={p7 } alt=''/>
        <h1 className='  text-3xl font-sans text-blue-900 font-bold mt-2 '>Bora Bora</h1>
        <p className='text-xl font-bold'>11 days<span className='text-xl font-bold text-gray-500'> from</span></p>
        <p className='text-xl font-bold text-gray-500'> Rs <span className='text-xl font-bold text-black'>10000 </span></p>
        </div>
        <div className='w-[400px] h-[500px] bg-white rounded-lg'>
        <img className='w-[400px] h-[380px] rounded-tl-lg rounded-tr-lg  ' src={p6 } alt=''/>
        <h1 className=' text-3xl font-bold text-blue-900 mt-2'>Maldives</h1>
        <p className='text-xl font-bold'>14 days<span className='text-xl font-bold text-gray-500'> from</span></p>
        <p className='text-xl font-bold text-gray-500'> Rs <span className='text-xl font-bold text-black'>22000 </span></p>
        </div>
        <div className='w-[400px] h-[500px] bg-white rounded-lg'>
        <img className='w-[400px] h-[380px] rounded-tl-lg rounded-tr-lg' src={p8 } alt=''/>
        <h1 className=' text-3xl font-sans text-blue-900 font-bold mt-2 '>Antigua</h1>
        <p className='text-xl font-bold'>20 days<span className='text-xl font-bold text-gray-500'> from</span></p>
        <p className='text-xl font-bold text-gray-500'> Rs <span className='text-xl font-bold text-black'>50000 </span></p>
        </div>
    </div>
    <div className='flex justify-center text-center gap-5 pb-20  bg-gray-100 dark:bg-slate-900'>  
      <div className='w-[400px] h-[500px] bg-white rounded-lg'>
        <img className='w-[500px] h-[380px] rounded-tl-lg rounded-tr-lg' src={p9 } alt=''/>
        <h1 className=' text-3xl font-sans text-blue-900 font-bold mt-2 '>Cozumel</h1>
        <p className='text-xl font-bold'>25 days<span className='text-xl font-bold text-gray-500'> from</span></p>
        <p className='text-xl font-bold text-gray-500'> Rs <span className='text-xl font-bold text-black'>45000 </span></p>

      </div>
      <div className='w-[400px] h-[500px] bg-white rounded-lg'>
        <img className='w-[500px] h-[380px] rounded-tl-lg rounded-tr-lg  ' src={p11 } alt=''/>
        <h1 className='   text-3xl font-bold text-blue-900 mt-2'>Jamaica</h1>
        <p className='text-xl font-bold'>12 days<span className='text-xl font-bold text-gray-500'> from</span></p>
        <p className='text-xl font-bold text-gray-500'> Rs <span className='text-xl font-bold text-black'>29999 </span></p>

      </div>
      <div className='w-[400px] h-[500px] bg-white rounded-lg'>
        <img className='w-[500px] h-[380px] rounded-tl-lg rounded-tr-lg' src={p10 } alt=''/>
        <h1 className=' text-3xl font-sans text-blue-900 font-bold mt-2 '>Key West</h1>
        <p className='text-xl font-bold'>7 days<span className='text-xl font-bold text-gray-500'> from</span></p>
        <p className='text-xl font-bold text-gray-500'> Rs <span className='text-xl font-bold text-black'>12000 </span></p>

        </div> 
    </div>
   
    <div className='flex justify-center'>
      <form >
			<div >
        <h1 className='font-bold text-3xl mt-10 flex justify-center text-blue-900'>NEWSLETTER</h1>
<p className='font-bold text-xl ml-40 mt-5 mr-40 text-center dark:text-white'>Let us inspire your next tailored holiday, sign up to receive expert advice and unique travel ideas.</p>

				<div className=" font-bold text-2xl mt-10  ml-40 dark:text-white"> 
					<label >Name: <input className='pl-2 mr-5 border-black border-b-2 dark:border-white dark:bg-black' type="text" placeholder="Enter Name" 
					 name="employeeid"  value={content.employeeid} onChange={handleInputs} required></input></label>
		
					<label >Email: <input className='pl-2 mr-5 border-b-2 dark:border-white dark:bg-black border-black' type="text" placeholder="Enter Email" 
					name="loanamount"  value={content.loanamount} onChange={handleInputs} required></input></label>
				
					<label >Number:<input className='pl-2 mr-5 border-b-2 dark:border-white dark:bg-black border-black' type="number" placeholder="Enter Number" 
					name="loantenure"  value={content.loantenure} onChange={handleInputs} required></input> </label>
								
				</div>		
				<div className="font-bold text-xl mt-10 flex justify-center bg-black text-white dark:text-black dark:bg-white rounded-lg
         ml-[600px] mr-[600px] py-1 hover:bg-white hover:text-black hover:border-black mb-20">
                    
					<button type="submit">Submit</button>
				</div>		
			</div>
      </form>
    </div>
    <div className='w-full bg-gray-100 dark:bg-rose-950 dark:text-white py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='flex text-center justify-between items-center'>
          <h1 className='text-4xl font-bold mb-3'>ISLANDS</h1>
          <ul className='lg:flex gap-5 ml-7 text-lg'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
        </div>

      </div>
    </div>

    </div>
    </div>
  )
}

export default Home