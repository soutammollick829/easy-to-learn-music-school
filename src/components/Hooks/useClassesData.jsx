import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useClassesData = () =>{
    // const [classes, setClasses] = useState(null);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch(`https://easy-to-learn-music-school-server.vercel.app/populer-class`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setClasses(data);
    //         setLoading(false);
    //     })
    // },[])

    const { user, loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["populer-class", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/populer-class`);
      return res.data;
    },
  });

    return [classes, refetch];
}

export default useClassesData;