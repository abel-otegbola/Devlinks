'use client'
import { app } from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from "../customHooks/useLocalStorage"
import { Toaster, toast } from "react-hot-toast";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [popup, setPopup] = useState(null);
    const [loading, setLoading] = useState(false);


    const signIn = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setPopup({ type: "success", msg: "Login Successful" })
            setLoading(false)
        })
        .catch((error) => {
            setPopup({ type: "error", msg: error.message.replace("Firebase: ", "") })
            setLoading(false)
        });
    }

    const signUp = (email, password, username) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            updateUserData(username, "")
            const user = userCredential.user;
            setPopup({ type: "success", msg:  "Signup Successful" })
            setLoading(false)
        })
        .catch((error) => {
            setPopup({ type: "error", msg:  error.message.replace("Firebase: ", "") })
            setLoading(false)
        });
    }
    
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setPopup({ type: "success", msg:  "Logout Successful" })
          }).catch((error) => {
            setPopup({ type: "error", msg:  error.message.replace("Firebase: ", "") })
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
    }, [setUser]);

    useEffect(() => {
        if (popup?.type === "success") {
            toast.success(popup.msg)
        }
        if (popup?.type === "error") {
            toast.error(popup.msg);
        }
      }, [popup]);

    return (
        <AuthContext.Provider value={{ user, popup, loading, setPopup, signIn, signUp, logOut }}>
            <Toaster containerClassName="p-8" />
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;