import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;