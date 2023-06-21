import React, { useEffect } from "react";
import { PuffLoader } from "react-spinners";
import SearchBar from "./components/SearchBar";
import CardsSection from "./components/CardsSection";
import usePokeContext from "./contents/Contents";

function App() {
  const { cardIsLoading, loading } = usePokeContext();

  return (
    <main className="container mx-auto overflow-hidden relative w-screen">
      <div className="fixed left-0 top-0 right-0 z-50 shadow-sm h-[10vh] w-full flex items-center justify-center backdrop-blur-sm">
        <SearchBar />
      </div>

      {cardIsLoading && !loading ? (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-slate-600/5 transition-all">
          <PuffLoader color="#1D3160" speedMultiplier={1.3} />
        </div>
      ) : null}

      <div className="mt-[10vh] mb-[5rem]">
        <CardsSection />
      </div>
    </main>
  );
}

export default App;
