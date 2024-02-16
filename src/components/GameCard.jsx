const GameCard = () => {
  return (
    <div className="border border-black overflow-auto  rounded-lg p-2 m-2 bg-gray-200">
      <img
        className="h-48 w-60"
        src="https://i.stack.imgur.com/MnKPT.jpg"
        alt="logo"
      />
      <h1 className="text-center font-bold text-xl">GTA V</h1>
    </div>
  );
};

export default GameCard;
