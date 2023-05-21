import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPlant } from "../hooks/fetchPlant";
import { Carousel } from "./Carousel";
import { Modal } from "./Modal";
import { useState } from "react";
import { ErrorBoundary } from "../../lib/ErrorBoundary";

 const Details = () => {
  const { id } = useParams();
  const result = useQuery(["plant", id], fetchPlant);
  const plant = result?.data?.data ?? [];
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Carousel images={plant?.main_species?.images?.flower} />
      The species `{plant?.scientific_name}` is a plant described by 
      {plant?.author} in {plant?.year}. It belongs to the {plant?.main_species?.family}{" "}
      family and falls under the genus {plant?.main_species?.genus}. The plant is assigned
      the ID {plant?.id}, while its corresponding genus has the ID 
      {plant?.genus_id}. 
      {plant?.common_name
        ? `Common names for this species include ${plant?.common_name}.`
        : "There are no common names available for this species."}
      Based on the information available, `{plant?.scientific_name}` is an 
      {plant?.main_species?.status} species within the {plant?.main_species?.family} family. It has the
      slug `{plant?.slug}`` and is classified as a {plant?.main_species?.rank}.
      <button onClick={() => setShowModal(true)}>buy</button>
      {showModal ? (
        <Modal>
          <div>buy this plant</div>
          <button onClick={() => setShowModal(false)}>no</button>
          <button onClick={() => navigate("/")}>yes</button>
        </Modal>
      ) : null}
    </div>
  );
};

export default function DetailsErrorBoundary(props){
  return(
    <ErrorBoundary>
      <Details {...props}/>
    </ErrorBoundary>
  )
}