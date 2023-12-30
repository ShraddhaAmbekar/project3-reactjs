import { useEffect, useState } from 'react';
import './App.css';
import Todotask from "./Components/Todotask"

function App() {
 //let arr=["task1","task2"]
let temparr=[]

useEffect(()=>{
  fetch("https://dummyjson.com/todos")
  .then(async (res)=>{
    let temp=await res.json();
    setArr(temp.todos)
  })
.catch(err=>{
    console.log(err)})
},[])



const [arr,setArr]=useState([temparr])
  return (
    
    <div className="App">
      <Todotask task={arr} setArr={setArr}/>
    
    </div>
  );
}

export default App;
