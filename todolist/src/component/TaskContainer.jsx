import React from 'react'
import SingleTask from './SingleTask'

const TaskContainer = () => {
  return (
    <div style={{padding:"20px 30px"}}>
  <SingleTask task="wake up early in morning"/>
  <SingleTask task="go to gym"/>
  <SingleTask task="practice last lectures"/>
  <SingleTask task="take more water"/>
    </div>
  )
}

export default TaskContainer
