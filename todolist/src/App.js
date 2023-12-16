import InputContainer from "./component/InputContainer"
import TaskContainer from "./component/TaskContainer"


function App() {
  
  let styleObj= {width:"500px", height:"450px", backgroundColor:"#ffffff", margin:"auto", borderRadius:"10px",}

  return (
    //if you want to write js inside your jsx use {}
    <div style ={styleObj}>
      <InputContainer/>
      <TaskContainer/>

    </div>
  );
}

export default App;
