import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import "../Stylesheet/home.css"
import Categories from "./Data"
import Errormessage from './Errormessage';

const Home = ({ name, setName, fetchQuestion}) => {
  const navigate  = useNavigate();
  const [category , setCategory] =useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  
  

  const handleSubmit =()=>{
    if (!category || !difficulty || !name){
      setError(true);
      return;
      }
    else {
      setError(false);
      fetchQuestion(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
  <>
      <div className='home'>
      <div className='section'>
     
      <div className='setting' >
     
      <div className='content'>
        <h2>Quiz Setting</h2>
      </div>
       
        <div className='setting_img'> 
        <img src="/quiz.svg" alt='quiz' />
        </div>
        </div>
        <div className='select_setting'>
            {error && <Errormessage>Please fill all the field</Errormessage>}

        <TextField
        className="name_input"
          label="Enter your Name"
           variant="outlined"
           style={{marginBottom:25}}
              onChange={(e) => setName(e.target.value)}
        /> 
        <TextField
        select
          label="select Category"
              style={{ marginBottom: 25 }}
           variant="outlined"
           onChange={(e)=> setCategory(e.target.value)}
           value={category}
        >
        {
          Categories.map((cap)=>(
            <MenuItem key={cap.category} value={cap.value}>
              {cap.category}
            </MenuItem>
          ))
        }
        
       </TextField>
            <TextField
              select
              label="Select Difficulty"
              // value={difficulty}
              // onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button
             variant="contained"
              color="primary" 
              size="large"
              onClick={handleSubmit}
            >Start Quiz</Button>
          </div>
      </div>
      </div>
  </>
  );
};

export default Home;
