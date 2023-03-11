import React, { useState, useEffect } from "react";
import { useProductContext } from "../contexts/Context";

const SelectCategories = () => {
  const { typeData, setsData, rarityData, setType, setSetID, setRarity } =
    useProductContext();

  return (
    <section className="flex gap-2">
      <select
        className="border px-4 py-2 outline-none"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select Type</option>
        {typeData.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      <select
        className="border px-4 py-2 outline-none"
        onChange={(e) => setRarity(e.target.value)}
      >
        <option value="">Select Rarity</option>

        {rarityData.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      <select
        className="border px-4 py-2 outline-none"
        onChange={(e) => setSetID(e.target.value)}
      >
        <option value="">Select Set</option>

        {setsData.map((item) => {
          return <option key={item.id}>{item.id}</option>;
        })}
      </select>
    </section>
  );
};

export default SelectCategories;
