import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../FIREBASE/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();






const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

// Create user.. //
  const createUserEmailPassowrd = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

// Currently signed-in user //
useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    return ()=> {
        return unsubscribe();
    };
},[]);


// Sign in user //

const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}




// handleSignOut user //
const handleSignOut = () =>{
    signOut(auth);
}

// Sign In with google //
const signInWithGoogle = () =>{
  signInWithPopup(auth, googleProvider)
  .then(result => {
    console.log(result)
  })
  .catch(err => console.log(err))
}




  const authInfo = {
    user,
    loading,
    createUserEmailPassowrd,
    handleSignOut,
    auth,
    signInUser,
    signInWithGoogle
  };







  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
