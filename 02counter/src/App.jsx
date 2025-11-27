import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[counter,chaiCounter]= useState(5)
//15 is a default value inside counter {it can be 0 also it totally depends upon me}
//setCounter ek method ha joh control kre gh counter koh
//let counter=5000
  const addValue=()=>{
    //console.log("Value added",Math.random());
    //counter=counter+1;s
    chaiCounter(prevcounter=>prevcounter+1)
    chaiCounter(prevcounter=>prevcounter+1)
    chaiCounter(prevcounter=>prevcounter+1)
    chaiCounter(prevcounter=>prevcounter+1)
    //console.log("clicked",counter);
  } 
  
  //console.log("Value added",Math.random());
    //counter=counter+1;
  const removevalue=()=>{
   if (counter>=1) {
    chaiCounter(counter-1)
    console.log("clicked",counter);
   }
}
  
  return (
    <>
    <h1>Anuj 2nd project</h1>
    <h2>Counter Value:{counter}</h2>
    <button
    onClick={addValue}>Add value{counter}</button> 
    <br />
    <button 
    onClick={removevalue}>Remove value{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
