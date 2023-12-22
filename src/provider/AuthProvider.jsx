import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const googleSingIn = () => {
        signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    const profileUpdate = (name,image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        signInUser,
        logOut,
        profileUpdate,
        googleSingIn,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;