import GameContainer from "./GameContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-1 p-5">
        <GameContainer />
      </div>
    </div>
  );
};

export default Body;
