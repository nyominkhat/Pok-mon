import React from "react";
import Select from "react-select";
import usePokeContext from "../contents/Contents";

const SearchBar = () => {
  const {
    typeOptions,
    rarityOptions,
    setOptions,
    searchParameter,
    setSearchParameter,
  } = usePokeContext();

  // console.log(searchParameter);

  function handleType(selectedOption) {
    const value = selectedOption?.value;
    setSearchParameter({ ...searchParameter, type: value });
  }

  function handleRarity(selectedOption) {
    const value = selectedOption?.value;
    setSearchParameter({ ...searchParameter, rarity: value });
  }

  function handleSet(selectedOption) {
    const value = selectedOption?.value;
    setSearchParameter({ ...searchParameter, set: value });
  }

  return (
    <div className="flex items-center mt-10 justify-between gap-4 max-h-[10vh]">
      <input
        type="text"
        placeholder="Search with name ..."
        className="border outline-none py-1.5 px-3 rounded-md w-1/3"
        value={searchParameter.name}
        onChange={(e) =>
          setSearchParameter({ ...searchParameter, name: e.target.value })
        }
      />

      <div className="grid grid-cols-3 w-1/2  gap-4">
        <Select
          closeMenuOnSelect={true}
          placeholder="Select a Type..."
          options={typeOptions}
          isClearable={true}
          onChange={handleType}
        />
        <Select
          closeMenuOnSelect={true}
          placeholder="Select a Rarity..."
          options={rarityOptions}
          isClearable={true}
          onChange={handleRarity}
        />
        <Select
          closeMenuOnSelect={true}
          placeholder="Select a Set..."
          options={setOptions}
          isClearable={true}
          onChange={handleSet}
        />
      </div>
    </div>
  );
};

export default SearchBar;
