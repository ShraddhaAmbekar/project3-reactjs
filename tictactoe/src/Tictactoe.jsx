import './tictactoe.css';
import React, { useState } from 'react'

const Tictactoe = () => {
  let arr = ['', '', '', '', '', '', '', '', '']

  const [stateArr, setStateArr] = useState(arr);
  const [player, setPlayer] = useState('X');
  const [win, setWin] = useState(false);
  function checkWinner(p) {
    if (stateArr[0] === p && stateArr[1] === p && stateArr[2] === p) {
      return true;
    }
    else if (stateArr[3] === p && stateArr[4] === p && stateArr[5] === p) {
      return true;
    }
    else if (stateArr[6] === p && stateArr[7] === p && stateArr[8] === p) {
      return true;
    }
    else if (stateArr[0] === p && stateArr[3] === p && stateArr[6] === p) {
      return true;
    }
    else if (stateArr[1] === p && stateArr[4] === p && stateArr[7] === p) {
      return true;
    }
    else if (stateArr[2] === p && stateArr[5] === p && stateArr[8] === p) {
      return true;
    }
    else if (stateArr[0] === p && stateArr[4] === p && stateArr[8] === p) {
      return true;
    }
    else if (stateArr[2] === p && stateArr[4] === p && stateArr[6] === p) {
      return true;
    }
    else { return false ;
    }
  }

  return (
    <div className='container'>
      {stateArr.map(function (ele, index) {
        return win === false ? <button
          onClick={function () {
            //console.log('btn')
            let result = false;
            if (stateArr[index] === "") {
              stateArr[index] = player;
              result=checkWinner(player);
              setWin(result);
              //stateArr[index]='0'
              setPlayer(player === "X"?"0":"X")
            }
            //console.log(stateArr);
            setStateArr([...stateArr])
          }}
        >{ele}
        </button> : <button>{ele}</button>
      })}
      {win === true ?<p>player {player === "X"?"0":"X"} is win</p>:<></>}


    </div>
  )
}

export default Tictactoe
