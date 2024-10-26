import React from 'react'

export default function QuizResult(props) {
  return (
    <div className='w-[100%] flex justify-center items-center'>
    <div className='w-[100%] flex  items-start flex-col md:mx-3'>
    <h1 className='md:text-6xl  text-3xl py-3'>
    Score:{props.score }
    </h1>
    <h1 className={`${ props.score > (40/100)*props.totalScore?"text-green-600":"text-red-700"} md:text-6xl text-4xl py-3`}>
    Total {props.totalScore}
    </h1>
    <h1 className={`${ props.score > (40/100)*props.totalScore?"text-green-600":"text-red-700"} md:text-6xl text-4xl py-3`}>Percentage : {Math.round((props.score/props.totalScore)*100,2)}%</h1>
    </div>
    </div>
  )
}
