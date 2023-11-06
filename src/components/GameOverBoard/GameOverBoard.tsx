import React from "react";
import { GameOverBoardProps } from "../../interfases/GameOverBoardProps";
import "./GameOverBoard.css";

const GameOverBoard: React.FC<GameOverBoardProps> = ({
  startFn,
  tSpeed,
  name,
  speed,
}) => {
  const handleButtonClick = () => {
    tSpeed(name, speed);
    startFn();
  };

  return (
    <div className="gameOverBoard">
      <p className="text-start">TOTAL SPEED: {speed}</p>
      <button onClick={handleButtonClick}>START</button>
    </div>
  );
};

export default GameOverBoard;
