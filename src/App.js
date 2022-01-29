import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import axios from "axios";
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import Quiz from './Component/quiz';
import Result from './Component/Result';


function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");

  const fetchQuestion = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestion(data.results);
  };

  return (
    
    <BrowserRouter>
     <Header/>
     <Routes >
        
        <Route exact path="/" element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion}  />}/>
        <Route exact path="/quiz" element={<Quiz name={name} score={score} setScore={setScore} setQuestion={setQuestion} question={question}/>} />
        <Route exact path="/result" element={<Result score={score} name={name}/>} />

        </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
