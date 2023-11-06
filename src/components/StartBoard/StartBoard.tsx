import React, { FC } from "react";
import {IStartBoardProps }from '../../interfases/IStartBoardProps'
import "./StartBoard.css";

const StartBoard: FC<IStartBoardProps> = ({ startFn }) => {
  return (
    <div className="startBoard">
      <p className="text-start">PRESS START TO PLAY</p>
      <button onClick={startFn}>START</button>
    </div>
  );
};

export default StartBoard;
