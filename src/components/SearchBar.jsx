import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import usePokeContext from "../contents/Contents";
import { useGetRarities, useGetSets, useGetTypes } from "../hooks";

const SearchBar = () => {
  const { searchParameter, setSearchParameter, setFilter, cardIsLoading } =
    usePokeContext();
  const [typeOptions, setTypeOptions] = useState([]);
  const [setOptions, setSetOptions] = useState([]);
  const [rarityOptions, setRarityOptions] = useState([]);

  const {
    data: typeDatas,
    isError: typeIsError,
    isLoading: typeIsLoading,
    error: typeError,
    refetch: typeRefetch,
  } = useGetTypes();

  const {
    data: setDatas,
    isError: setIsError,
    isLoading: setIsLoading,
    error: setError,
    refetch: setRefetch,
  } = useGetSets();

  const {
    data: rarityDatas,
    isError: rarityIsError,
    isLoading: rarityIsLoading,
    error: rarityError,
    refetch: rarityRefetch,
  } = useGetRarities();

  useEffect(() => {
    if (!typeIsLoading && !typeIsError) {
      const data = typeDatas.data.map((item) => {
        return { value: item, label: item };
      });
      setTypeOptions(data);
    }

    if (!setIsLoading && !setIsError) {
      const data = setDatas.data.map((item) => {
        return { value: item.id, label: item.name };
      });
      setSetOptions(data);
    }

    if (!rarityIsLoading && !rarityError) {
      const data = rarityDatas.data.map((item) => {
        return { value: item, label: item };
      });
      setRarityOptions(data);
    }
  }, [typeDatas, setDatas, rarityDatas]);

  console.count("count");

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
    <div className="flex items-center mt-10 justify-between gap-4 max-h-[10vh]">
      <input
        type="text"
        placeholder="Search with name ..."
        className="border outline-none py-1.5 px-3 rounded-md w-1/3"
        disabled={cardIsLoading}
        ref={inputRef}
        onChange={(e) => setFilter(e.target.value)}
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
