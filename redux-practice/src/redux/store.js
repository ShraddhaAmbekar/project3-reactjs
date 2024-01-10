import { createStore } from "redux"; 
import reducerHandler from "./reducer";

const store=createStore(reducerHandler);

export default store
