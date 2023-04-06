import React from "react";
import { PuffLoader } from "react-spinners";

import usePokeContext from "../contents/Contents";
import Card from "./Card";

const CardsSection = React.memo(() => {
  const { cards, cardIsLoading } = usePokeContext();
  // console.log(cards);
  // console.count("count");

  return (
    <section className="flex items-center flex-col justify-center h-[76vh] lg:h-[80vh] ">
      {cards.length === 0 ? null : (
        <div className="fixed left-5 top-5 border border-violet-900 p-2 lg:flex hidden">
          {cards.length}
        </div>
      )}

      {!cardIsLoading && cards.length === 0 && (
        <div className="flex items-center text-center h-[40vh] text-2xl font-bold">
          Oh! <br /> There is nothing to show😞
        </div>
      )}

      {cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 h-full overflow-x-hidden overflow-y-auto p-4  rounded-md shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)]">
          {cards.map((item) => (
            <Card key={item.images.small} data={item} />
          ))}
        </div>
      )}
    </section>
  );
});

export default CardsSection;
