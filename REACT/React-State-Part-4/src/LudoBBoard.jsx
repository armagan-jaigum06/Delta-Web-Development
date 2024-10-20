import { useState } from "react";
export default function LudoBBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };
  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "black" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "Yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "Green", color: "black" }}
          onClick={updateGreen}
        >
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "Red", color: "black" }}
          onClick={updateRed}
        >
          +1
        </button>
      </div>
    </div>
  );
}
