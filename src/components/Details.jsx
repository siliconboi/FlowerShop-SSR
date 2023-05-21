import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { fetchPlant } from "../hooks/fetchPlant"
import { Carousel } from "./Carousel"
import { Modal } from "./Modal"
import { useState } from "react"

export const Details = ()=>{
    const {id}= useParams()
    const plant= useQuery(['plant',id], fetchPlant)
    console.log(plant)
    const [showModal, setShowModal]=useState(false)
    const navigate = useNavigate()
    return (
        <div>
            
        <Carousel props={plant.images.flower}/>
           The species `${plant[0].scientific_name}` is a plant described by ${plant[0].author} in ${plant[0].year}.
           It belongs to the ${plant[0].family} family and falls under the genus ${plant[0].genus}. 
           The plant is assigned the ID ${plant[0].id}, while its corresponding genus has the ID ${plant[0].genus_id}.

${plant[0].common_name ? `Common names for this species include ${plant[0].common_name}.` : "There are no common names available for this species."}

Based on the information available, `${plant[0].scientific_name}` is an ${plant[0].status} species within the ${plant[0].family} family. 
It has the slug `${plant[0].slug}`` and is classified as a ${plant[0].rank}.
<button onClick={()=>setShowModal(true)}>buy</button>
{showModal?(
<Modal>
    <div>buy this plant</div>
    <button onClick={()=>setShowModal(false)}>no</button>
    <button onClick={()=>navigate("/")}>yes</button>
</Modal>
):(
    null
)}
        </div>
    )
}