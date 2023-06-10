import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";

const useSelectedClass = email =>{
    const {user} = useContext(AuthContext);
    const {refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selected-class'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/selected-class?email=${user?.email}`)
            return res.json();
        },
      })
      return [selectedClass , refetch];
}

export default useSelectedClass;