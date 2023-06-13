import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/Authprovider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructors = () =>{
    // const [instructors, setInstructors] = useState(null);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch(`https://easy-to-learn-music-school-server.vercel.app/instructors`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setInstructors(data);
    //         setLoading(false);
    //     })
    // },[])

    const { user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
  
    const { refetch, data: instructors = [] } = useQuery({
      queryKey: ["instructors", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/instructors`);
        return res.data;
      },
    });

    return [instructors, refetch];
}

export default useInstructors;