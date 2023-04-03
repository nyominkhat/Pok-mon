import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetCards, useGetRarities, useGetSets, useGetTypes } from "../hooks";

const Context = createContext();

const usePokeContext = () => {
  return useContext(Context);
};

export const PokeContext = ({ children }) => {
  const [typeOptions, setTypeOptions] = useState([]);
  const [setOptions, setSetOptions] = useState([]);
  const [rarityOptions, setRarityOptions] = useState([]);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [searchParameter, setSearchParameter] = useState({
    name: "",
    type: "",
    rarity: "",
    set: "",
  });

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

  const {
    data: cardDatas,
    isError: cardIsError,
    isLoading: cardIsLoading,
    error: cardError,
    refetch: cardRefetch,
  } = useGetCards(page, pageSize, searchParameter);

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

  useEffect(() => {
    if (!cardIsLoading && !cardIsError) {
      setCards([...cardDatas.data]);
    }
  }, [cardDatas]);

  useEffect(() => {
    setPageSize(12);
    if (!cardIsLoading && !cardIsError) {
      const getData = setTimeout(async () => {
        if (searchParameter.name !== "") {
          setCards([...cardDatas.data]);
        }
        if (searchParameter.type !== "" || searchParameter.type !== undefined) {
          setCards([...cardDatas.data]);
        }
        if (
          searchParameter.rarity !== "" ||
          searchParameter.rarity !== undefined
        ) {
          setCards([...cardDatas.data]);
        }
        if (searchParameter.set !== "" || searchParameter.set !== undefined) {
          setCards([...cardDatas.data]);
        }
      }, 1000);

      return () => clearTimeout(getData);
    }
  }, [
    searchParameter.name,
    searchParameter.set,
    searchParameter.rarity,
    searchParameter.type,
  ]);

  function handleSeeMore() {
    setPageSize((prev) => prev + 12);
  }

  const value = {
    typeOptions,
    rarityOptions,
    setOptions,
    cards,
    handleSeeMore,
    cardIsLoading,
    searchParameter,
    setSearchParameter,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default usePokeContext;
