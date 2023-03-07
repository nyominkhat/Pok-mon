import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SelectCategories from "./components/SelectCategories";
import { useProductContext } from "./contexts/Context";

function App() {
  const { seeMore, data } = useProductContext();

  return (
    <div className="container p-4 mx-auto text-red-600">
      <div className="flex border">
        <SearchBox />
        <SelectCategories />
      </div>

      <div className="flex flex-wrap gap-4">
        {data === [] ? (
          <div>Loading ...</div>
        ) : (
          data.map((item) => (
            <div className="border p-2 w-96" key={item.id}>
              <p>name:: {item.name}</p>
              <p>type:: {!item.types ? item.subtypes[0] : item.types[0]}</p>
              <p>rarity:: {item.rarity}</p>
              <p>set:: {item.set.id}</p>
            </div>
          ))
        )}
      </div>

      <button onClick={seeMore} className="border rounded-md p-4">
        See More
      </button>
    </div>
  );
}

export default App;

// Ampharos
