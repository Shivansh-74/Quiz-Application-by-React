import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='md:w-[50%] w-[85%]  flex flex-col gap-4  mx-auto py-5'>
    <h1 className='text-3xl font-bold text-gray-600 my-3'>Start the Quiz with Your Favorite Topic </h1>
    <button>
    <NavLink to="/lists" className="py-2 px-5 bg-gray-300 border rounded text-2xl hover:bg-gray-400 duration-150
">Start</NavLink>
    </button>
    <p className='text-1xl text-gray-600 py-3'><span className='font-bold'>Note -: </span>Quiz on each topic has 20 questions</p>
    <div>
    <h1 className='text-2xl text-gray-700 py-4 font-bold'>Topics</h1>
    <div className='flex flex-wrap gap-[20px] justify-center'>
    <button className="py-2 px-7 bg-gray-300 border rounded text-1xl hover:bg-gray-400 duration-150 cursor-not-allowed">Python</button>
    <button className="py-2 px-7 bg-gray-300 border rounded text-1xl hover:bg-gray-400 duration-150 cursor-not-allowed">Java</button>
    <button className="py-2 px-7 bg-gray-300 border rounded text-1xl hover:bg-gray-400 duration-150 cursor-not-allowed">Php</button>
    <button className="py-2 px-7 bg-gray-300 border rounded text-1xl hover:bg-gray-400 duration-150 cursor-not-allowed">React</button>
    <button className="py-2 px-7 bg-gray-300 border rounded text-1xl hover:bg-gray-400 duration-150 cursor-not-allowed">Frontend</button>
    <button className="py-2 px-7 bg-gray-300 border rounded text-1xl hover:bg-gray-400 duration-150 cursor-not-allowed">Django</button>
    <button className="py-2 px-7 bg-gray-300 border rounded text-1xl hover:bg-gray-400 duration-150 cursor-not-allowed">SQL</button>
  
    </div>
    </div>
    </div>
  )
}
