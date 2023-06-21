import React, { useEffect } from "react";

import usePokeContext from "../contents/Contents";
import Card from "./Card";

const CardsSection = React.memo(() => {
  const { cards, cardIsLoading, handleSeeMore, loading } = usePokeContext();

  const handleScroll = () => {
    if (cards.length > 0 && cards.length < 250) {
      return;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      handleSeeMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!cardIsLoading && cards.length === 0) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center text-center text-2xl font-bold">
        Oh! <br /> There is nothing to show😞
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden">
      {cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 p-4">
          {cards.map((item) => (
            <Card key={item.images.small} data={item} />
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-[5rem] overflow-hidden">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 container mx-auto ">
            <div className="max-w-sm animate-pulse">
              <div className="border grid grid-cols-2 gap-4 p-2 rounded-t-md shadow-md h-[5rem] bg-gray-200 dark:bg-gray-400"></div>
            </div>
            <div className="max-w-sm animate-pulse">
              <div className="border grid grid-cols-2 gap-4 p-2 rounded-t-md shadow-md h-[5rem] bg-gray-200 dark:bg-gray-400"></div>
            </div>
            <div className="max-w-sm animate-pulse">
              <div className="border grid grid-cols-2 gap-4 p-2 rounded-t-md shadow-md h-[5rem] bg-gray-200 dark:bg-gray-400"></div>
            </div>
            <div className="max-w-sm animate-pulse">
              <div className="border grid grid-cols-2 gap-4 p-2 rounded-t-md shadow-md h-[5rem] bg-gray-200 dark:bg-gray-400"></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default CardsSection;
