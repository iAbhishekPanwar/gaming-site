import { useEffect } from "react";
import { GAMING_API } from "../utils/constants";
import GameCard from "./GameCard";
import { useState } from "react";

const GameContainer = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    const data = await fetch(GAMING_API);
    const json = await data.json();
    console.log(json);
    setGames(json.results);
  };
  return (
    <div className="flex flex-wrap ">
      {games.map((game) => (
        <GameCard key={game.id} info={game} />
      ))}
    </div>
  );
};

export default GameContainer;
