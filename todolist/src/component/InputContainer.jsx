import React from "react"

const InputContainer = () => {
  return(
    <div style={{display:"flex",justifyContent:"center", padding:"30px 20px"}}>
      <input style={{fontSize:"20px", padding:"10px",border:"2px blue solid", borderRadius:"5px",width:"300px"}}/>
      <button style={{fontSize:"20px",width:"80px", backgroundColor:"rgb(4, 78, 251)", color:"white", border:"none",marginLeft:"20px", borderRadius:"5px"}}>Add</button>
    </div>
)
}

export default InputContainer
