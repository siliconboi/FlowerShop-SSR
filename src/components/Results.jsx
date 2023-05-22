/* eslint-disable react/prop-types */
import { Plant } from "./Plant";

export const Results = ({plants}) => {
  console.log(plants)
  return (
    <div className=" grid gap-4 grid-cols-1 sm:grid-cols-3">
      {!plants.length ? (
        <h1>no plants found</h1>
      ) : (
        plants?.map((plant) => {
          return (
            <Plant
              key={plant.id}
              name={plant.common_name}
              scientificName={plant.name}
              id={plant.id}
              genus={plant.genus}
              family={plant.family}
              image={plant.image_url}
            />
          );
        })
      )}
    </div>
  );
};
