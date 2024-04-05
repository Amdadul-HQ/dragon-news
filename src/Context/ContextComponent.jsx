import { createContext, useState } from "react";


const Context = createContext()

const ContextComponent = ({children}) => {

    const [user,setUser] = useState()


    const createUser = (email,password) => {
        
        return 

    }




    const info = {}
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default ContextComponent;