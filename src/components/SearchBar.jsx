import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import usePokeContext from "../contents/Contents";
import URL from "../api/BaseUrl";

const SearchBar = () => {
  const { searchParameter, setSearchParameter, setFilter, cardIsLoading } =
    usePokeContext();
  const [typeOptions, setTypeOptions] = useState([]);
  const [setOptions, setSetOptions] = useState([]);
  const [rarityOptions, setRarityOptions] = useState([]);

  const getTypes = async () => {
    const typeDatas = await fetch(`${URL}types`);
    const data = await typeDatas.json();
    setTypeOptions(
      data.data.map((item) => {
        return { value: item, label: item };
      })
    );
  };

  const getRarities = async () => {
    const typeDatas = await fetch(`${URL}rarities`);
    const data = await typeDatas.json();
    setRarityOptions(
      data.data.map((item) => {
        return { value: item, label: item };
      })
    );
  };

  const getSets = async () => {
    const typeDatas = await fetch(`${URL}sets`);
    const data = await typeDatas.json();
    setSetOptions(
      data.data.map((item) => {
        return { value: item.id, label: item.name };
      })
    );
  };

  useEffect(() => {
    getTypes();
    getRarities();
    getSets();
  }, []);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!cardIsLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [cardIsLoading]);

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
    <div className="flex items-center justify-center flex-wrap lg:items-start lg:mt-10 mt-5 lg:justify-between lg:gap-4 gap-2 max-h-[10vh] p-1">
      <input
        type="text"
        placeholder="Search with name ..."
        className="border outline-none py-1.5 px-3 rounded-md w-full sm:w-96 lg:w-auto"
        disabled={cardIsLoading}
        ref={inputRef}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="flex items-center justify-start sm:gap-4 gap-1 w-[40rem]">
        <Select
          className="text-xs sm:text-base w-1/3"
          closeMenuOnSelect={true}
          placeholder="Select a Type..."
          options={typeOptions}
          isClearable={true}
          onChange={handleType}
        />
        <Select
          className="text-xs sm:text-base w-1/3"
          closeMenuOnSelect={true}
          placeholder="Select a Rarity..."
          options={rarityOptions}
          isClearable={true}
          onChange={handleRarity}
        />
        <Select
          className="text-xs sm:text-base w-1/3"
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
