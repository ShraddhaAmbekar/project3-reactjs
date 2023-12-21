import React from 'react'
import SingleTask from './SingleTask'


let arr =["do some cooking","read some books", "take more water", "do some exercise"]

const TaskContainer = ({task}) => {
  arr.push(task)
  return (
    <div style={{padding:"20px 30px"}}>
      {arr.map(function(ele, index){
        return <SingleTask task={ele} taskno={index+1 + ". "}/>
      })}


  {/* <SingleTask task="wake up early in morning"/>
  <SingleTask task="go to gym"/>
  <SingleTask task="practice last lectures"/>
  <SingleTask task="take more water"/> */}
    </div>
  )
}

export default TaskContainer
