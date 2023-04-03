import { useQuery } from "@tanstack/react-query";
import GetTypes from "../api/GetTypes";
import GetSets from "../api/GetSets";
import GetRarities from "../api/GetRarities";
import GetCards from "../api/GetCards";

export const useGetTypes = () => {
  return useQuery(["Types"], GetTypes);
};

export const useGetSets = () => {
  return useQuery(["Sets"], GetSets);
};

export const useGetRarities = () => {
  return useQuery(["Rarities"], GetRarities);
};

export const useGetCards = (page, pageSize, searchParameter) => {
  return useQuery(["Cards", page, pageSize, searchParameter], () =>
    GetCards(page, pageSize, searchParameter)
  );
};
