import React from "react";

const Card = React.memo(({ data }) => {
  // console.log(data);
  return (
    <article className="border grid grid-cols-2 gap-4 p-2 rounded-md shadow-md md:hover:shadow-lg md:hover:scale-105 cursor-pointer transition-all max-h-[19rem]">
      <figure>
        <img src={data.images.small} alt={data.name} />
      </figure>
      <div className="flex flex-col justify-center">
        <h2 className="flex items-center">
          <span className="w-2/5">Name</span> :
          <span className="w-3/5">{data.name}</span>
        </h2>
        <h2 className="flex items-center">
          <span className="w-2/5">Type</span> :
          <span className="w-3/5">{data.types}</span>
        </h2>
        <h2 className="flex items-center">
          <span className="w-2/5">Rarity</span> :{" "}
          <span className="w-3/5">{data.rarity}</span>
        </h2>
        <h2 className="flex items-center">
          <span className="w-2/5">Set</span> :
          <span className="w-3/5 truncate">{data.set.name}</span>
        </h2>
      </div>
      <div className="flex justify-center items-center w-[200%]">
        <button className="border py-1.5 px-3 rounded-md text-sm md:hover:text-slate-500 transition-colors">
          View Card
        </button>
      </div>
    </article>
  );
});

export default Card;
