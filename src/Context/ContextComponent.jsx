import { createContext, useEffect, useState } from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext()

const ContextComponent = ({children}) => {

    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const logInWithGithub = () => {

    }
    const logInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        // setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
           if(currentUser){
            setUser(currentUser);
            setLoading(false);
           }
           else{
            setUser(null);
            setLoading(false);
           }
        });
        return () => unSubcribe()
    },[])

    


    const info = {user , createUser , logIn ,logOut ,loading ,logInWithGoogle}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;