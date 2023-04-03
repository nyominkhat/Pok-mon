import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchBar from "./components/SearchBar";
import { PokeContext } from "./contents/Contexts";
import CardsSection from "./components/CardsSection";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokeContext>
        <main className="container mx-auto flex flex-col h-screen">
          <SearchBar />
          <div className="flex-grow">
            <CardsSection />
          </div>
        </main>
      </PokeContext>
    </QueryClientProvider>
  );
}

export default App;

