import React from "react";

const PokeCard = ({ item }) => {
  return (
    <div className="relative flex flex-wrap items-center justify-evenly gap-4 p-2 w-auto  min-w-[24rem] border rounded-md shadow-md text-center">
      <figure className="w-2/5 p-2 h-auto">
        <img
          className="w-full h-full object-cover"
          src={item.images.small}
          alt={item.name}
        />
      </figure>

      {/* card info */}
      <div className="flex w-2/5 gap-1 flex-col text-left">
        <>
          <h4 className="font-semibold text-lg">Name</h4>
          <span className="flex text-sm text-gray-600">{item.name}</span>
        </>

        <>
          <h4 className="font-semibold text-lg">Type</h4>
          <span className="flex text-sm text-gray-600">
            {!item.types
              ? item.subtypes[0]
              : item.types.map((type, index) => {
                  return (
                    <React.Fragment key={index}>
                      <p>{type}</p>
                      {index < item.types.length - 1 && <span>, </span>}
                    </React.Fragment>
                  );
                })}
          </span>
        </>

        <>
          <h4 className="font-semibold text-lg">Rarity</h4>
          <span className="flex text-sm text-gray-600">{item.rarity}</span>
        </>

        <>
          <h4 className="font-semibold text-lg">Set</h4>
          <span className="flex text-sm text-gray-600">{item.set.id}</span>
        </>
      </div>

      <button className="mt-4 border py-4 px-2 rounded-md text-base font-semibold">
        Add To Cart
      </button>
    </div>
  );
};

export default PokeCard;
