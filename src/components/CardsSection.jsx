import React from "react";
import { PuffLoader } from "react-spinners";

import usePokeContext from "../contents/Contexts";
import Card from "./Card";

const CardsSection = () => {
  const { cards, handleSeeMore, cardIsLoading } = usePokeContext();
  // console.log(cards);
  console.count('count')

  return (
    <section className="flex items-center flex-col justify-center h-[80vh] ">
      <div className="fixed left-5 top-5 border border-violet-900 p-2">
        {cards.length}
      </div>
      {cardIsLoading && (
        <div className="fixed flex flex-col items-center justify-center w-screen h-screen bg-slate-600/5  transition-all">
          <PuffLoader color="#1D3160" speedMultiplier={1} />
        </div>
      )}

      {!cardIsLoading && cards.length === 0 && (
        <div className="flex items-center text-center h-[40vh] text-2xl font-bold">
          Oh! <br /> Three is nothing to show😞
        </div>
      )}

      {cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 max-h-[80vh] overflow-x-hidden overflow-y-auto p-4  rounded-md shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]">
          {cards.map((item) => (
            <Card key={item.images.small} data={item} />
          ))}
        </div>
      )}

      <button
        onClick={handleSeeMore}
        disabled={cardIsLoading}
        className="border px-4 py-2 rounded-lg mt-10 bg-cyan-500 shadow-lg shadow-cyan-500/60 text-white font-semibold"
      >
        SeeMore
      </button>
    </section>
  );
};

export default CardsSection;
