const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg  w-1/4 bg-gray-200 ">
      <h1 className="font-bold  pt-5">New Releases</h1>
      <ul>
        <li>Last 30 days</li>
        <li>This week</li>
        <li>Next week</li>
      </ul>
      <h1 className="font-bold pt-5">Top</h1>
      <ul>
        <li>Best of the year</li>
        <li>Popular in 2020</li>
        <li>All time top 250</li>
      </ul>
      <h1 className="font-bold pt-5">Category</h1>
      <ul>
        <li>Action</li>
        <li>Adventure</li>
        <li>Survival</li>
        <li>Shooting</li>
        <li>RPG</li>
        <li>Open world</li>
        <li>Strategy</li>
        <li>Multiplayer</li>
        <li>Simulation</li>
        <li>Comedy</li>
        <li>2D games</li>

        <li>Horror</li>
        <li>Army</li>
      </ul>
    </div>
  );
};

export default Sidebar;
