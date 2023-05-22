/* eslint-disable no-undef */
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
    <div className="text-xl text-green-100">
      <div className="h-full w-full">
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
      <button className="bg-green-900 justify-center mx-auto px-6 py-0.5 rounded block my-3" onClick={() => setShowModal(true)}>buy</button>
      </div>
      {showModal ? (
        <Modal>
          <div className=" h-screen text-2xl fixed w-full bg-opacity-20 z-10 bg-slate-50 flex justify-center align-items-center">
          <div className="rounded-lg shadow-sm align-items-center justify-items-center m-auto h-1/4 w-1/3 bg-slate-50"><div className="block m-auto text-center my-2">Buy this plant?</div>
          <button className="block bg-slate-200 w-24 m-auto my-2" onClick={() => setShowModal(false)}>No</button>
          <button className="block bg-slate-200 w-24 m-auto my-2" onClick={() => navigate("/")}>Yes</button></div>
          </div>
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
