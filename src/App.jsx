import React from "react";
import { PuffLoader } from "react-spinners";
import SearchBar from "./components/SearchBar";
import CardsSection from "./components/CardsSection";
import usePokeContext from "./contents/Contents";

function App() {
  console.count("count");
  const { handleSeeMore, cardIsLoading } = usePokeContext();

  return (
    <main className="container mx-auto flex flex-col max-h-screen overflow-hidden">
      <SearchBar />

      {cardIsLoading && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-slate-600/5 transition-all">
          <PuffLoader color="#1D3160" speedMultiplier={1.3} />
        </div>
      )}

      <div className="flex-grow">
        <CardsSection />
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={handleSeeMore}
          disabled={cardIsLoading}
          className="border px-4 py-2 rounded-lg mt-10 bg-cyan-500 shadow-md shadow-cyan-500/60 text-white font-semibold "
        >
          SeeMore
        </button>
      </div>
    </main>
  );
}

export default App;
