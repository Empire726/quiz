import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Errormessage from './Errormessage';
import "../Stylesheet/question.css"
import { Button } from '@material-ui/core';


const Question = ({
    currQues,setCurrQues, question, options , correct, score,setScore,setQuestion
}) => {
    const navigate = useNavigate();
    const [select, setSelect] = useState();
    const [error, setError] = useState();

    const handleQuit =()=>{}
    const handleNext = () => {
        if (currQues > 10){
            navigate("/result");
        }
        else if (select){
            setCurrQues(currQues + 1)
            setSelect();
        }
        else{setError("please select an options first")}

    }




    const handleCheck =(i)=>{
        setSelect(i);
        if(i === correct) setScore(score + 1);
        setError(false);

    };

    const handleSelect =(i) =>{
        if(select === i && select === correct){
            return "select";
        }
        else if (select === i && select !== correct){
            return "wrong";
        }
        else if(i === correct){
            return "select";
        }
    }
return (
                <div className='question'>
           <h1>Question{currQues+1}:</h1>
                        <div className='singlequestion'>
    <h2>{question[currQues].question}</h2>
    <div className='options'>
    {error && <Errormessage>{error}</Errormessage>}
    {options &&
        options.map((i)=>(
            <button 
            onClick={() => handleCheck(i)}
            className={`singleoption ${select && handleSelect(i)}`}
            key={i}
            disabled={select} 
            >
                {i}
                
            </button>
        ))}
    </div>
    <div className='control'>
    <Button
     variant='contained'
     color="secondary"
     size="large"
     style={{width:185}}
     href="/"
     onClick={handleQuit}
    > Quiz</Button>
                <Button
                    variant='contained'
                    color="primary"
                    size="large"
                    style={{ width: 185 }}
                    onClick={handleNext}
                >NEXT Question</Button>
            

    </div>
</div>

      
  </div>)
};

export default Question;


