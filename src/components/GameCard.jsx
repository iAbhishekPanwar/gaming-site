const GameCard = ({ info }) => {
  return (
    <div className="border border-black overflow-auto rounded-lg p-4 m-6 bg-gray-200">
      <img className="h-48 w-72" src={info.background_image} alt={info.name} />
      <div className="text-center">
        <h1 className="font-bold text-xl overflow-hidden whitespace-nowrap max-w-60 md:max-w-full">
          {info.name}
        </h1>
      </div>
      <p className="text-center">Released: {info.released}</p>
    </div>
  );
};

export default GameCard;
