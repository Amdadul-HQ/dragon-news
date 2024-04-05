import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import { Navigate, useLocation } from "react-router-dom";

const PrivateComponent = ({children}) => {

    const location = useLocation()
    console.log(location);

    const {user , loading } = useContext(AuthContext);

    console.log(loading);
    
    if(loading){ return <progress className="progress w-56"></progress>}

    // return user ? children : <Navigate to='/login' ></Navigate>
    return user ? (
        <div>{ children }</div>
    ) : (
        <Navigate to={ '/login' } state={ { from: location } } replace />
    )
};

export default PrivateComponent;