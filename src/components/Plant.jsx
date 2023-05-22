import { Link } from "react-router-dom";

export const Plant = (params) => {
  return (
    <div className=" h-96 bg-slate-500 bg-opacity-10 rounded-full">
      <Link to={`details/${params.id}`}>
        <div className="h-96">
          <img src={params.image} alt={params.name} className=" rounded-full h-72 w-96"/>
          <h1 className="text-2xl no-underline">{params.name}</h1>
          <h2 className="text-lg">{params.scientificName}</h2>
          <h3 className="text-lg">{params.genus}</h3>
        </div>
      </Link>
    </div>
  );
};
