import React, { useEffect, useState } from 'react';
import "./Box.css";

const Box = ({ choice }) => {
  const [block1, setBlock1] = useState();
  const [p1, setP1] = useState(choice);
  const [p2, setP2] = useState(choice !== "X" ? "X" : "O");
  const [count, setCount] = useState(0);
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState("");
  const [b4, setB4] = useState("");
  const [b5, setB5] = useState("");
  const [b6, setB6] = useState("");
  const [b7, setB7] = useState("");
  const [b8, setB8] = useState("");
  const [b9, setB9] = useState("");
  const [win, setWin] = useState(false);
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);

  console.log(count);



  useEffect(()=>{
    if(b1 === b2 && b2 === b3 && b3 === b1 && b1!=="" && b2!==""&& b3!==""){
      setTimeout(()=>{
       setWin(true)
      },200)
    }else if(b4 === b5 && b5 === b6 && b6 === b4 && b4!==""&& b5!==""&& b6!=="" ){
     setTimeout(()=>{
       setWin(true)
      },200)
    }
    else if(b7 === b8 && b8 === b9 && b9 === b7 && b7!==""&& b8!==""&& b9!=="" ){
     setTimeout(()=>{
       setWin(true)
      },200)
    }
    else if(b1 === b4 && b4 === b7 && b7 === b1 && b1!==""&& b4!==""&& b7!=="" ){
     setTimeout(()=>{
       setWin(true)
      },200)
    }
    else if(b2 === b5 && b5 === b8 && b8 === b2 && b2!==""&& b5!==""&& b8!=="" ){
     setTimeout(()=>{
       setWin(true)
      },200)
    }
    else if(b3 === b6 && b3 === b9 && b9 === b3 && b3!==""&& b6!==""&& b9!=="" ){
     setTimeout(()=>{
       setWin(true)
      },200)
    }else if(b1 === b5 && b5 === b9 && b9 === b1 && b1!==""&& b5!==""&& b9!=="" ){
     setTimeout(()=>{
       setWin(true)
      },200)
    }else if(b3 === b5 && b5 === b7 && b7 === b3 && b3!==""&& b5!==""&& b7!=="" ){
     setTimeout(()=>{
       setWin(true)
      },200)
    }
    else if(count === 9 && win === false){
     setTimeout(()=>{
       alert("draw")
      },200)
    }
   },[b1,b2,b3,b4,b5,b6,b7,b8,b9])

   useEffect(() => {
    if (win) {
      const winner = count % 2 === 0 ? p2 : p1;
      if (winner === p1) {
        setScoreP1(scoreP1 + 1);
      } else {
        setScoreP2(scoreP2 + 1);
      }
      setTimeout(() => {
       
        resetBoard();
      }, 200);
    }
  }, [win]);

  const handleClick = (e, fn) => {
    if (!win && e.target.innerText === "") {
      const currentSymbol = count % 2 === 0 ? p1 : p2;
      e.target.innerText = currentSymbol;
      e.target.style.color = currentSymbol === p1 ? "red" : "blue";
      setCount(count + 1);
      fn(currentSymbol);
    }
  }

  const resetBoard = () => {
    setB1("");
    setB2("");
    setB3("");
    setB4("");
    setB5("");
    setB6("");
    setB7("");
    setB8("");
    setB9("");
    setCount(0);
    setWin(false);
    document.querySelectorAll('.block').forEach(block => block.innerText = "");
  }

  useEffect(() => {
    if (win) {
      setTimeout(() => {
        alert(`Player ${count % 2 === 0 ? p2 : p1} wins!`);
        resetBoard();
      }, 200);
    }
  }, [win]);

  return (
    <div className='boxWrapper'>
      <div className='wrapper'>
        <div className='row1 row'>
          <div id="b1" className={b1 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB1)}></div>
          <div id="b2" className={b2 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB2)}></div>
          <div id="b3" className={b3 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB3)}></div>
        </div>
        <div className='row2 row'>
          <div id="b4" className={b4 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB4)}></div>
          <div id="b5" className={b5 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB5)}></div>
          <div id="b6" className={b6 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB6)}></div>
        </div>
        <div className='row3 row'>
          <div id="b7" className={b7 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB7)}></div>
          <div id="b8" className={b8 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB8)}></div>
          <div id="b9" className={b9 === "" ? "block" : "disabled block"} onClick={(e) => handleClick(e, setB9)}></div>
        </div>
      </div>
      <div>
        <p className='player'> Player 1 : {p1}</p>
        <p className='player'> Player 2 : {p2}</p>
        <p><h1>Score:</h1> <p className='score '><span className={p1 === "O" ? "redcolor" : "bluecolor"}>Player 1 -> {scoreP1} </span>| <span className={p2 === "O" ? "redcolor" : "bluecolor"}>Player 2 -> {scoreP2}</span></p></p>
      </div>
    </div>
  );
}

export default Box;
