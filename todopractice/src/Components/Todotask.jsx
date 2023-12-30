import React from 'react'
import "../Styles/todo.css"

const Todotask = (props) => {
  let inputvalue="";
 
  return (
    <div>
      <div>
        <h1 style={{fontSize:"35px"}}>Todo list</h1>
        <input className='inputbox' onChange={function(event){
          inputvalue = event.target.value
        }}/>
        <button className='addbutton' onClick={function(event){
          props.setArr([...props.task, inputvalue])
        }}>Add</button>
      </div>
      <div className='task-container'>
        {props.task.map(function(ele){
        return <p className='task'>{ele.todo}</p>})} 
      </div>
    </div>

  )
}

export default Todotask
