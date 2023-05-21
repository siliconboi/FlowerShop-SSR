import { Link } from "react-router-dom";

export const Plant = (params) => {
  return (
    <div>
      <Link to={`details/${params.id}`}>
        <div>
          <img src={params.image} alt={params.name} />
          <h1>{params.name}</h1>
          <h2>{params.scientificName}</h2>
          <h3>{params.genus}</h3>
        </div>
      </Link>
    </div>
  );
};
