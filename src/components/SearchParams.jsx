import { useState } from "react";
import { useGenusList } from "../hooks/useGenusList";
import { Results } from "./Results";
import { useQuery } from "@tanstack/react-query";
import { fetchPlants } from "../hooks/fetchPlants";

const SearchParams = () => {
  const Families = [
    ["Daisy Family", "13"],
    ["Lily Family", "377"],
    ["Nightshade Family", "455"],
    ["Mustard Family", "8"],
    ["Rose Family", "11"],
    ["Mallow Family", "115"],
    ["Legume family", "49"],
    ["Lilac family", "26"],
  ];
  const Color = ["red", "blue", "yellow", "white", "black", "green"];
  const [searchParams, setSearchParams] = useState({
    family: [],
    genus: "",
    flowerColor: "",
  });
  const [family, setFamily] = useState([]);
  const [genus] = useGenusList(family);
  const results = useQuery(["plants", searchParams], fetchPlants);
  const plants = results?.data?.data ?? [];
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            family: formData.get("family"),
            genus: formData.get("genus"),
            flowerColor: formData.get("flowerColor"),
          };
          setSearchParams(obj);
        }}
      >
        <label htmlFor="family">
          <select
            id="family"
            name="family"
            onChange={(e) => {
              e.preventDefault;
              setFamily(e.target.value);
            }}
            onBlur={(e) => {
              e.preventDefault;
              setFamily(e.target.value);
            }}
          >
            <option />
            {Families.map((g) => (
              <option key={g} value={g}>
                {g[0]}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="genus">
          <select disabled={!(genus?.data?.length)} id="genus" name="genus">
            <option />
            {genus?.data?.map((g) => (
              <option key={g.name} value={g.name}>
                {g.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="flowerColor">
          <select id="flowerColor" name="flowerColor">
            <option />
            {Color.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">submit</button>
      </form>
      <Results plants={plants} />
    </div>
  );
};

export default SearchParams