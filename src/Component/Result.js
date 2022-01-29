import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Stylesheet/result.css";

const Result = ({score ,name}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!name){
      // navigate("/")
    }
  }, [name, navigate]);

  return (
  <>
  <div className='result'>
  <h2 className='title'> Final Score: {score}</h2>
  <Button
          variant='contained'
          color="secondary"
          size="large"
          style={{ alignSelf:"center", marginTop:20}}
          href="/"
  
  >
    GO TO HOME PAGE
  </Button>

  </div>
  
  </>
  )
};

export default Result;
