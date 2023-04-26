import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../FIREBASE/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


// Create user.. //
  const createUserEmailPassowrd = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

// Currently signed-in user //
useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return ()=> {
        return unsubscribe;
    };
},[])

// handleSignOut user //

const handleSignOut = () =>{
    signOut(auth);
}



  const authInfo = {
    user,
    createUserEmailPassowrd,
    handleSignOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
