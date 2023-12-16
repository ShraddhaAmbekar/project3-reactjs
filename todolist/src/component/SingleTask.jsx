import React from 'react'


const SingleTask = ({task}) => {
  return (
    <div style={{fontSize:"20px", margin:"10px", textAlign:"center" ,padding:"15px", backgroundColor:"#BBDEFB",borderRadius:"5px",border:"1px solid blue"}}>
    {task}
    
    </div>
  )
}

export default SingleTask
