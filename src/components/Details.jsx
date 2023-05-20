export const Details = ({data})=>{
    return (
        <div>
           The species "${data[0].scientific_name}" is a plant described by ${data[0].author} in ${data[0].year}.
           It belongs to the ${data[0].family} family and falls under the genus ${data[0].genus}. 
           The plant is assigned the ID ${data[0].id}, while its corresponding genus has the ID ${data[0].genus_id}.

${data[0].common_name ? `Common names for this species include ${data[0].common_name}.` : "There are no common names available for this species."}

Based on the information available, "${data[0].scientific_name}" is an ${data[0].status} species within the ${data[0].family} family. 
It has the slug "${data[0].slug}" and is classified as a ${data[0].rank}.
        </div>
    )
}