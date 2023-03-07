import React from "react";
import { useProductContext } from "../contexts/Context";

const SearchBox = () => {
  const { searchData, setSearchData } = useProductContext();

  return (
    <input
      onChange={(e) => setSearchData(e.target.value)}
      className="border p-2"
      type="text"
      value={searchData}
      placeholder="search with name"
    />
  );
};

export default SearchBox;
