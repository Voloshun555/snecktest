import React, { useState, useEffect, FC } from "react";
import "./HighScores.css";

type HighScoresProps = {
  name: string;
};

const HighScores: FC<{ gameResult: { name: string } | null }> = ({
  gameResult,
}) => {
  const [highScores, setHighScores] = useState<HighScoresProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data: HighScoresProps[]) => setHighScores(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="gamers_list">
      <h2 className="gamer">List of players</h2>
      <div className="select-wrapper">
        <select>
          {highScores.map((score, index) => (
            <option key={index}>{score.name}</option>
          ))}
          {gameResult && <option value="gameResult">{gameResult.name}</option>}
        </select>
      </div>
    </div>
  );
};

export default HighScores;
