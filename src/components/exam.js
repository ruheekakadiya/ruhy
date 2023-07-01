import React, { useState } from 'react'
import { Examquestion } from '../one/examquestion'
import Examreslut from './examreslut';
function Exam() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOptoin,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false); 
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion<Examquestion.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOptoin===Examquestion[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className='heading'>EXAM APP</p>
        <div className='container'>
            {showResult ? (
                <Examreslut score={score} totalScore={Examquestion.length} tryAgain={resetAll}/> 
            ):(
            <>
            <div className='question'>
                <span id='question-num'>{currentQuestion+1}.</span>
                <span id='question-txt'>{Examquestion[currentQuestion].question}</span>
            </div>
            <div className='option'>
                {Examquestion[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className='option-btn'
                        className={`option-btn ${
                            clickedOptoin == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                            {option}
                        </button>
                    )
                })}
            </div>
            <input type='button' value='Next' id='Next-button' onClick={changeQuestion}/>
            </> )}   
        </div>
    </div>
  )
}

export default Exam
