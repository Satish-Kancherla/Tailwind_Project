import React from 'react'
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

  return (
    <div>
        <div className='flex w-8/12 justify-between items-center h-20  absolute z-10 text-black'>
      
      
      <div className='h-screen  dark:bg-black flex justify-center items-center'>
        <h1 className='font-bold text-5xl m-24'>ISLANDS</h1>
      </div>
      <ul className='flex gap-10 text-2xl'>
      <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      
       
      
      </div>
    <div className='w-full h-screen relative sm:w-full'>
        
        <video className='w-full h-full object-cover' src={v1}  autoPlay loop muted/>
    </div>
    <div className='flex-col text-center'>
        <h1 className='font-bold text-5xl mt-16 tracking-wide'>All-Inclusive Views</h1>
        <p className='mb-10 text-xl mt-2 tracking-wide'>On the Caribbean's Best Views</p>
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
            <h1 className='font-bold text-3xl mb-5'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
            <p className='text-xl text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.It is a long established fact that a reader will be distracte as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
       
        
    </div>
    <div className='flex justify-center text-center  mb-2 mt-20 '>
        
        <img className='w-[500px] h-[380px] relative' src={p7 } alt=''/>
        <h1 className='absolute left-36 text-3xl font-sans mt-5 font-bold  '>Bora Bora</h1>
        <img className='w-[500px] h-[380px] ml-2 relative' src={p6 } alt=''/>
        <h1 className='absolute  mt-5 text-3xl font-bold text-white'>Maldives</h1>
        <img className='w-[500px] h-[380px] ml-2 relative' src={p8 } alt=''/>
        <h1 className='absolute right-44 text-3xl font-sans mt-5 font-bold  '>Antigua</h1>
    </div>
    <div className='flex justify-center text-center   mb-20'>   
        <img className='w-[500px] h-[380px] relative' src={p9 } alt=''/>
        <h1 className='absolute left-40 text-3xl font-sans mt-5 font-bold  '>Cozumel</h1>
        <img className='w-[500px] h-[380px] ml-2 relative' src={p11 } alt=''/>
        <h1 className='absolute  mt-5 text-3xl font-bold text-white'>Jamaica</h1>
        <img className='w-[500px] h-[380px] ml-2 relative' src={p10 } alt=''/>
        <h1 className='absolute right-40 text-3xl font-sans mt-5 font-bold  '>Key West</h1>  
    </div>

    {/* <div className='flex justify-center'>
            <form >
            <p className='text-2xl ml-2'>Request For Service</p>
                <table className='text-xl mt-5'  border-2 border-black >                        
                        <tr><td><label>Name:</label></td><td><input type="text" className='border-2 mt-2 '  placeholder="Enter Name" name='name' /></td></tr>
                        <tr><td><label>Email:</label></td><td><input type="email" className='border-2 ' placeholder="Enter Email" name='email' /></td></tr>
                        <tr><td><label>Phone:</label></td><td><input type="number" className='border-2' placeholder="Enter Phone" name='phone' /></td></tr>
                        <button className='bg-black text-white rounded text-xl p-1 ml-5 mt-5 mb-5'>Submit</button>
                </table>
            </form>
        </div> */}




    <div className='w-full bg-gray-100 py-16'>
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
  )
}

export default Home