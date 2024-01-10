const initialState=[];
const reducerHandler =(state=initialState,action)=>{
  if(action.type==="PRODUCT_LIST"){
    return [{color:"yellow",size : "XL"},
    {color:"red",size:"L"},
    {color:"blue",size:"XS"}]
  }
  else if(action.type==="PRODUCT_COST"){
    return [{color:"yellow", size:"XL", cost:100},
    {color:"red",size:"L", cost:2000},
    {color:"blue",size:"XS", cost:6000}]
}
}
export default reducerHandler;
