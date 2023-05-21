import { useQuery } from "@tanstack/react-query"
import { fetchGenusList } from "./fetchGenuslist"

export const useGenusList=(family)=>{
    const genus = useQuery(['genus',family], fetchGenusList)
return [genus?.data ?? [], genus.status]
}
