import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import { Navigate, useLocation } from "react-router-dom";

const PrivateComponent = ({children}) => {

    const location = useLocation()

    const {user , loading } = useContext(AuthContext);

    console.log(loading);
    
    if(loading){ return <progress className="progress w-56"></progress>}

    return user ? (
        <div>{ children }</div>
    ) : (
        <Navigate to={ '/login' } state={ { from: location } } replace />
    )
};

export default PrivateComponent;