import React, { useState, useEffect, createContext, useContext } from "react";

const API = `${import.meta.env.VITE_API_URL}/cards`;

const context = createContext();

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [pageSizeLimit, setPageSizeLimit] = useState(12);
  const [searchData, setSearchData] = useState("");
  const [type, setType] = useState("");
  const [setID, setSetID] = useState("");
  const [rarity, setRarity] = useState("");

  console.log(type, setID, rarity);

  const [typeData, setTypeData] = useState([]);
  const [rarityData, setRarityData] = useState([]);
  const [setsData, setSetsData] = useState([]);

  function fetchData() {
    fetch(
      `${API}?q=${setID === "" ? "" : `set.id:${setID}`} ${type === "" ? "" : `types:${type}`} ${rarity === "" ? "" : `rarity:${rarity}`} ${searchData === "" ? "" : `name:${searchData}`}&pageSize=${pageSizeLimit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((products) => {
        setData(products.data);
      })
      .catch((error) => console.warn("Sorry!", error));
  }

  function fetchTypeData() {
    fetch("https://api.pokemontcg.io/v2/types")
      .then((res) => res.json())
      .then((type) => setTypeData(type.data))
      .catch((error) => console.warn("Sorry!", error));
  }

  function fetchRarityData() {
    fetch("https://api.pokemontcg.io/v2/rarities")
      .then((res) => res.json())
      .then((rarity) => setRarityData(rarity.data))
      .catch((error) => console.warn("Sorry!", error));
  }

  function fetchSetsData() {
    fetch("https://api.pokemontcg.io/v2/sets")
      .then((res) => res.json())
      .then((sets) => setSetsData(sets.data))
      .catch((error) => console.warn("Sorry!", error));
  }

  useEffect(() => {
    fetchTypeData();
    fetchRarityData();
    fetchSetsData();

    if (searchData !== "" || type !== "" || setID !== "" || rarity !== "") {
      const getData = setTimeout(() => {
        fetchData();
      }, 1000);

      return () => clearTimeout(getData);
    } else {
      fetchData();
    }
  }, [pageSizeLimit, searchData, type, setID, rarity]);

  const seeMore = () => {
    setPageSizeLimit((prevState) => prevState + 10);
  };

  const value = {
    pageSizeLimit,
    seeMore,
    data,
    searchData,
    setSearchData,
    typeData,
    setsData,
    rarityData,
    setType,
    setSetID,
    setRarity,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ProductContext;

export function useProductContext() {
  return useContext(context);
}
