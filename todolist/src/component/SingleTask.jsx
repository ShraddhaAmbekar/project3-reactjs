import React from 'react'

const SingleTask = ({task, taskno}) => {
  return (
    <div style={{fontSize:"20px", margin:"10px", textAlign:"center" ,padding:"15px", backgroundColor:"#BBDEFB",borderRadius:"5px",border:"1px solid blue"}}>
      {taskno}
    {task}
    <button>Delete</button>
    </div>
  )
}

export default SingleTask
