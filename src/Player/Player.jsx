import React from 'react';

const Player = ({choice,setChoice}) => {

  return (
    <div className="player">
      <div>Player</div>
      
        <input type="radio" id="selectX" value={"X"} onClick={(e)=>setChoice(e.target.value)}  name="playerSelect" /> X
   
      <br />
        <input type="radio" id="selectO" value={"O"} onClick={(e)=>setChoice(e.target.value)} name="playerSelect" /> O
      
    </div>
  );
};

export default Player;
