import React from 'react' 
import { useDispatch ,useSelector} from 'react-redux';

const Product = () => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  console.log(state)
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:"PRODUCT_LIST"})
      }}>Click1</button>

<button onClick={()=>{
        dispatch({type:"PRODUCT_COST"})
      }}>Click2</button>
    </div>
  )
}

export default Product
