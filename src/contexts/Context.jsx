import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetCards } from "../hooks";

const Context = createContext();

const usePokeContext = () => {
  return useContext(Context);
};

export const PokeContext = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [searchParameter, setSearchParameter] = useState({
    name: "",
    type: "",
    rarity: "",
    set: "",
  });
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    data: cardDatas,
    isError: cardIsError,
    isLoading: cardIsLoading,
    error: cardError,
    refetch: cardRefetch,
  } = useGetCards(pageSize, searchParameter, page);

  useEffect(() => {
    if (!cardIsLoading && !cardIsError) {
      setCards([...cardDatas.data]);
      setLoading(false);
    }
  }, [cardDatas]);

  useEffect(() => {
    setPageSize(12);
    if (filter === "") {
      setSearchParameter({ ...searchParameter, name: "" });
    }

    const getData = setTimeout(async () => {
      if (filter !== "") {
        setSearchParameter({ ...searchParameter, name: filter });
      }
    }, 1000);

    return () => clearTimeout(getData);
  }, [
    filter,
    searchParameter.type,
    searchParameter.set,
    searchParameter.rarity,
  ]);

  function handleSeeMore() {
    setLoading(true);
    setPageSize((prev) => prev + 12);
  }

  const value = {
    cards,
    handleSeeMore,
    cardIsLoading,
    searchParameter,
    setSearchParameter,
    filter,
    setFilter,
    loading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default usePokeContext;
