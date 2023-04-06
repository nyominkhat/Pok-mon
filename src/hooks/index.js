import { useQuery } from "@tanstack/react-query";
import GetCards from "../api/GetCards";

export const useGetCards = (pageSize, searchParameter, page) => {
  return useQuery(["Cards", pageSize, searchParameter, page], () =>
    GetCards(pageSize, searchParameter, page)
  );
};
