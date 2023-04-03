import URL from "./BaseUrl";

const GetCards = async (page = 1, pageSize = 12, searchParameter) => {
  const requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    redirect: "follow",
    method: "GET",
  };
  // console.log("searchParameter", searchParameter, page, pageSize);
  try {
    const response = await fetch(
      `${URL}cards?q= ${
        searchParameter.set === "" || searchParameter.set === undefined
          ? ""
          : `set.id:${searchParameter.set}`
      } ${
        searchParameter.type === "" || searchParameter.type === undefined
          ? ""
          : `types:${searchParameter.type}`
      } ${
        searchParameter.rarity === "" || searchParameter.rarity === undefined
          ? ""
          : `rarity:${searchParameter.rarity.split(" ").join("*")}`
      }  ${
        searchParameter.name === "" ? "" : `name:${searchParameter.name}*`
      } &page=${page}&pageSize=${pageSize}`,
      requestOptions
    );
    const result = await response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};

export default GetCards;
