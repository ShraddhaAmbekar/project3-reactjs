import { useState } from "react";
import InputContainer from "./component/InputContainer"
import TaskContainer from "./component/TaskContainer"


function App() {

  const [input , setInput] = useState("");

  let styleObj= {width:"500px", height:"600px", backgroundColor:"#ffffff", margin:"auto", borderRadius:"10px",}

  return (
    //if you want to write js inside your jsx use {}
    <div style ={styleObj}>
      <InputContainer setInput={setInput}/>
      <TaskContainer task={input}/>

    </div>
  );
}

export default App;
