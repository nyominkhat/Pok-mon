import React, { useState } from "react";
import { PuffLoader } from "react-spinners";

import PokeCard from "./components/PokeCard";
import SearchBox from "./components/SearchBox";
import SelectCategories from "./components/SelectCategories";
import { useProductContext } from "./contexts/Context";

function App() {
  const { seeMore, data, loading } = useProductContext();

  console.log("data", data);

  return (
    <div className="relative container flex flex-col items-center justify-between min-h-screen p-4 mx-auto overflow-auto">
      <div className="flex gap-10">
        <SearchBox />
        <SelectCategories />
      </div>

      {loading === true ? (
        <div className="fixed top-0 left-0 bottom-0 z-50 right-0 flex justify-center items-center">
          <PuffLoader color={"#ae5555"} size={100} speedMultiplier={2.4} />
        </div>
      ) : null}

      <div className="flex items-center justify-evenly h-[80vh] overflow-auto flex-wrap gap-4 shadow-sm scrollbar-thumb-yellow-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-corner-orange-400 p-5">
        {data.map((item) => (
          <PokeCard key={item.id} item={item} />
        ))}
      </div>

      <button
        disabled={loading}
        onClick={seeMore}
        className="border rounded-md p-4 flex items-center justify-center gap-2 w-40"
      >
        {loading && (
          <PuffLoader color={"#ae5555"} size={18} speedMultiplier={2.5} />
        )}
        <span>See More</span>
      </button>
    </div>
  );
}

export default App;
