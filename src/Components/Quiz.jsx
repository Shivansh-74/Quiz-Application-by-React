import React, { useState } from 'react'
import { javaQuiz,pyQuiz } from '../Data/QuizData'
import QuizResult from './QuizResult'
export default function Quiz({quizType}) {
    const [queNo,setQueNo]=useState(0)
    const [score,setScore] = useState(0)
    const [clickOption,setClickOption] = useState(0)
    const [show,setShow] = useState(false)
    const changeQue =  () =>{
        updateScore();
        if(queNo<quizType.length-1){

            setQueNo(queNo+1)
            setClickOption(0)
        }
        else{
            setShow(true)
        }
    }
 
    const updateScore = ()=>{
        if(clickOption === quizType[queNo].answer){
            setScore(score+1)
        }
    }
    const resetAll = () =>{
        show(false)
        setQueNo(0)
        setScore(0)
        setClickOption(0)

    }
  return (
    <div className='w-[100%] md:h-[90vh] h-[100vh] flex flex-col justify-start items-center'>
    <div className='md:w-[90%] w-[100%] h-[90vh] flex flex-col justify-start items-start'>
    <div className='w-[100%]'>
    <h1 className='text-3xl font-bold py-4 text-left'>Quiz App</h1>
    </div>
    <div className='md:w-[60%] w-[100%] md:h-[400px]  flex flex-col justify-start'>
    {
        show?(<QuizResult score={score} totalScore = {quizType.length} tryAgain = {resetAll}/>):(
            <>
            <div className='flex flex-col justify-start'>
            <div className="questions text-start">
            <h1 className='text-3xl py-3 '>Question {queNo+1} of {quizType.length} </h1>
            <h1 className='text-2xl py-3 mb-4'>{quizType[queNo].question}</h1>
             
            </div>
            <div className=" md:w-[70%] w-[100%]">
            {
                quizType[queNo].options.map((option,i)=>{
                    return(
                        <>
                        <button key={i} 
                        className={`${clickOption == i+1?"bg-gray-400":null}  py-2 w-[100%] my-1 rounded-[2px] bg-gray-200 hover:bg-gray-300 duration-150`}
                        
                        onClick={()=>setClickOption(i+1)}>
                        <div className='flex md:gap-5 gap-2'>
                        <span className="md:mx-3 mx-1">{i+1}.</span>
                        {option} 
                        </div>
                        </button><br />
                        
                        </>
                    )
                })
            }
            <div className="w-[100%]  flex justify-start py-4">
            <input type="submit" value="Next" onClick={changeQue} className=' text-2xl py-2 px-7 bg-gray-300 rounded-[5px] cursor-pointer hover:bg-gray-200'/>
            </div>
            </div>
            </div>
            </>
        )}
            </div>
    </div>
    </div>
    )
    }
