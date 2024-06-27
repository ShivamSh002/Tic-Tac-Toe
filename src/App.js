import React, { useState } from 'react';
import './App.css';
import Box from './Box/Box';
import Player from './Player/Player';

const App = () => {
  const [start, setStart] = useState(true);
  const [selectPlayer, setSelectPlayer] = useState(true);
  const [choice,setChoice] = useState("")
  console.log(choice)

  const handleClick = () =>{
  console.log("ddsvfd")

if(choice!==""){
  setSelectPlayer(!selectPlayer)
}
  }

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      {start ? (
        <h1 className='start' onClick={() => setStart(!start)}>Start</h1>
        
      ) : (
        selectPlayer ? (
          <div >
            <Player onClick={handleClick()}  choice={choice} setChoice={setChoice}/>
          </div>
        ) : (
          <div className='wrapper'>
          <Box choice={choice}/>
        </div>
        )
      )}
    </div>
  );
};

export default App;
