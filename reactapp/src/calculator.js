import React, { useState, useRef } from 'react';

function App() {
const input=useRef(null);
const [value, setValue]=useState(0);
const sum=(e)=>{
  e.preventDefault();
  setValue((value)=>(value+Number(input.current.value)));
}
const sub=(e)=>{
  e.preventDefault();
  setValue((value)=>(value-Number(input.current.value)));
}
const mul=(e)=>{
  e.preventDefault();
  setValue((value)=>(value*Number(input.current.value)));
}
const divi=(e)=>{
  e.preventDefault();
  setValue((value)=>(value/Number(input.current.value)));
}
const reset=(e)=>{
  e.preventDefault();
  setValue(0);
  input.current.value=0;
}
  return (
    <div className="App">
      
      <input ref={input} placeholder='enter number' type='number'/>
      <button onClick={sum}>Add</button>
      <button onClick={sub}>sub</button>
      <button onClick={mul}>mul</button>
      <button onClick={divi}>div</button>
      <button onClick={reset}>reset</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
