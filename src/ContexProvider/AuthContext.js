import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthorContext = createContext()
const auth = getAuth(app);



const AuthContext = ({children}) => {
    const[user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //create new user
    const createUser =(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //user singin 
    const userSingIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //user log out
    const logOut =() => {
        return signOut(auth)
    }

    //login with google
    const providerLogIn = (provider) => {
        return signInWithPopup(auth,provider)
    }
    //sing in with github
    const providerGitHub = provider => {
        return signInWithPopup(auth,provider)
    }

    //tracking user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser=> {
            setUser(currentUser)
            setLoading(false)
        }))
        return () => {
            unsubscribe()
        }
    },[])
   
    const authInfo ={
        user,
        createUser,
        userSingIn,
        logOut,
        providerLogIn,
        providerGitHub}


    return (
        <div>
           <AuthorContext.Provider value={authInfo}>
                {children}
           </AuthorContext.Provider>
        </div>
    );
};

export default AuthContext;