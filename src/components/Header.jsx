import React from "react";

const Header = () => {
  return (
    <div className="flex shadow-lg  items-center my-0 bg-gray-200">
      <h1>
        <img
          className="h-16 w-16 w-18 mx-5 "
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/The-punisher-logo-png-transparent.png"
          alt=""
        />
      </h1>
      <div className="mx-32">
        <input
          className="border-black shadow-md p-2 mx-16 w-96 h-10 rounded-lg justify-center"
          type="text "
          placeholder="Search 512,835 Games"
        />
        <button>
          <img
            className="h-6 w-6 "
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/Search_Icon.png?20200524051850"
            alt="searchLogo"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
