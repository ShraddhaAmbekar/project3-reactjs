//how to create a component
//functional component
//first letter  should be capital of component name

//regular function

// function App() {
//   return (
// <div>
//   <h1>Hello this is my first component App</h1>
// </div>
//   );
// }

import "./App.css"
import Navigation from "./component/Navigation";
import Main from "./component/Main"
import Bio from "./component/Bio"

//arrow function
const App=() =>{
  return (
    <div>
      <Navigation/>
      <Main/>
      <Bio/>
    </div>
  );
}
export default App;
