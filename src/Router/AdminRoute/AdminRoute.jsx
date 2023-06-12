import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import useAdmin from "../../components/Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin , isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    }

    if(user || isAdmin){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;