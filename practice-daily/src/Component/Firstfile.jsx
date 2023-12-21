import React, { useState } from 'react'//not default import therefore {} reqired

//let value=1

const Firstfile = () => {
  const [val, setVal] = useState(1) //hook
  function incHandler(){
    setVal(val + 1)
    console.log(val);
  }
  function decHandler(){
    setVal(val - 1)
    console.log(val);
  }

  return (
    <div>
    <h1>Firstfile</h1>
    <h2>{val}</h2>  
    <button onClick={function(){
      console.log("Increment")
      //value++;
      setVal(val + 1)
      console.log(val)
    }}>Increment</button>
    <button onClick={function(){
      console.log("Decrement")
      //value--
      setVal(val - 1)
      console.log(val)
    }}>Decrement</button><br /><br />
    <button onClick={incHandler}>Inc</button>
    <button onClick={decHandler}>Dec</button>
</div>
  )
}


export default Firstfile
