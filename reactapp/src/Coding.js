import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { questions } from './questions';
import './Coding.css';

function Coding() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  }, []);

  if (!question) return <p>Loading...</p>;

  return (
    <div className='Coding'>
      <div className='container1'>
        <div className='Questions'>
          <h2>Question:</h2>
          <p>{question.title}</p>
        </div>
        {question.test_cases.map((testCase, index) => (
          <div key={index} className='test_case'>
            <h3>Test Case {index + 1}</h3>
            <p>Input: {testCase.input}</p>
            <p>Output: {testCase.output}</p>
            <p>Explanation: {testCase.explanation}</p>
          </div>
        ))}
        <center><button><Link to='/compile'>Proceed to code</Link></button></center>
      </div>
    </div>
  );
}

export default Coding;
