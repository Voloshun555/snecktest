import React, { FC } from "react";
import { IPauseButtonProps } from "../../interfases/IPauseButtonProps";

const PauseButton: FC<IPauseButtonProps> = ({ isPaused, togglePause }) => {
  const handlePauseClick = () => {
    togglePause(!isPaused);
  };

  return (
    <>
      <button onClick={handlePauseClick}>
        {isPaused ? "CONTINUE" : "PAUSE"}
      </button>
    </>
  );
};

export default PauseButton;
