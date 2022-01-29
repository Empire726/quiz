import React, { useEffect, useState } from 'react';
import {CircularProgress} from "@material-ui/core"
import style from "../Stylesheet/quiz.module.css"
import Question from './Question';

const Quiz = ({name,setScore,setQuestion,score,question }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const handleSuffle =(options)=>{
return options.sort(()=>Math.random()-0.5);
  }

 useEffect(() => {
   console.log(question);
   setOptions(question && handleSuffle([question[currQues]?.correct_answer,
                            ...question[currQues]?.incorrect_answers,]));
  
 },[question,currQues]);
 
  return (
    <div className={style.Quizinfo}>
      <span className={style.subtitle}> Welcome,{name}</span>
  
      {question?(
        <> 
        <div className={style.quiz}>
            <span>{question[currQues].category}</span>
        <span>SCORE : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            question={question}
            options={options}
            correct={question[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestion={setQuestion}
          />
      </>):(<CircularProgress style={{ margin:50, alignContent:'center',justifyContent:'center'}}
  color='inherit'
   size={50}
   thickness={1}
 /> )
  }
  </div>
  )
};

export default Quiz;
