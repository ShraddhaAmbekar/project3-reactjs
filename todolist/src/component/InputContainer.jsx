import React from "react"

const InputContainer = ({setInput}) => {

  let input =""

  function addHandler(){
    setInput(input)
    console.log("set input")}

 

  
  return(
    <div style={{display:"flex",justifyContent:"center", padding:"30px 20px"}}>
      <input style={{fontSize:"20px", padding:"10px",border:"2px blue solid", borderRadius:"5px",width:"300px"}} onChange={ function(event){
        input=event.target.value;
        console.log(input)
  }}/>
      <button style={{fontSize:"20px",width:"80px", backgroundColor:"rgb(4, 78, 251)", color:"white", border:"none",marginLeft:"20px", borderRadius:"5px"}} onClick={addHandler}>Add</button>
      
    </div>
)
}

export default InputContainer
