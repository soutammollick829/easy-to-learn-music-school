import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
  const { user, loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selected-class", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selected-class?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClass, refetch];
};

export default useSelectedClass;
