import { useState } from "react";
import { useGenusList } from "../hooks/useGenusList";
import { Results } from "./Results";

export const SearchParams = () => {
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
    family: "",
    genus: "",
    flowerColor: "",
  });
  const [family, setFamily] = useState("");
  const [genus] = useGenusList(family);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault;
          const formData = new FormData(e.target);
          const obj = {
            family: formData.family.value,
            genus: formData.genus.value,
            flowerColor: formData.flowerColor.value,
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
                {g}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="genus">
          <select disabled={!genus.length} id="genus" name="genus">
            <option />
            {genus.map((g) => (
              <option key={g} value={g}>
                {g}
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
      </form>
      <Results params={searchParams}/>
    </div>
  );
};
