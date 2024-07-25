'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { AuthContext } from "./useAuth"
import { Toaster, toast } from "react-hot-toast"


export const LinksContext = createContext()

export default function LinksProvider({ children }) {
    const [links, setLinkss] = useLocalStorage("links", [])
    const [popup, setPopup] = useState()
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext)

    const addLinks = async (data) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(db, "Links"), data);
            getAllLinkss()
            setPopup({ type: "success", msg: "Links added successfully" })
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "Error adding Links" })
            setLoading(false)
        }
    }
    
    const updateLinks = async (id, data) => {
        setLoading(true)
        try {
            const docRef = await updateDoc(doc(db, "Links", id), data);
            getAllLinkss()
            setPopup({ type: "success", msg: "Links updated successfully" })
            setLoading(false)
        }
        catch(e) {
            setPopup({ type: "error", msg: "Error updating Links" })
            setLoading(false)
        }
    }
    
    const getAllLinks = async () => {
        setLoading(true)
        try {
            let arr = []
            const querySnapshot = await getDocs(query(collection(db, "Links"), where("user", "==", user?.email)));
            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
            })
            setLinkss(arr)
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setPopup({ type: "error", msg: "error loading Links" })
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllLinks()
    }, [])

    useEffect(() => {
        if (popup?.type === "success") {
            toast.success(popup.msg)
        }
        if (popup?.type === "error") {
            toast.error(popup.msg);
        }
      }, [popup]);

    return (
        <LinksContext.Provider value={{ links, loading, addLinks, getAllLinks, updateLinks }}>
            <Toaster containerClassName="p-8" containerStyle={{ top: "auto", bottom: 20 }} toastOptions={{ style: { backgroundColor: "#101010", color: "#fff" } }} />
            { children }
        </LinksContext.Provider>
    )
}