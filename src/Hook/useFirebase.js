import { useEffect, useState } from "react"
import firebaseInitialization from "../firabase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,FacebookAuthProvider } from "firebase/auth";

firebaseInitialization()
const useFireabase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)        
    }
    
    const facebookSignIn = () => {
        signInWithPopup(auth,facebookProvider)
        .then(result => {
            console.log(result.user);
        })
        .finally(() => {
            setLoading(false)
        })
    }
       
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            else {
                setUser({})
            }
            setLoading(false)
        })
        
    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
            }).catch((error) => {
            // An error happened.
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const [count,setCount] = useState(0)
    const [cart,setCart] = useState([])
    return {googleSignIn,user,logOut,facebookSignIn,count,setCount,cart,setCart,loading,setLoading}
}

export default useFireabase