
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-toastify";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState(null);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth);
        setUserDetails(false)
    }

    const googleAuth = () => {
        setLoading(true)
        signInWithPopup(auth, provider)
        .then(result => {
            const userResult = result.user
            console.log(userResult)
            setUserDetails(userResult);

            const email = userResult.email
            const creationTime = userResult?.metadata?.creationTime;
            const lastLoginTime = userResult?.metadata?.lastSignInTime
            const userContent = {email, creationTime, lastLoginTime} 

            fetch('https://assignment-10-tmw-southeast-asia-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userContent)
            })
            
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // condition 
                if(data.insertedId){
                    toast.success('Sign In Successfully')

                }
            })
        })
        .catch(error => console.log(error.message))
    }

    const githubAuth = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const userResult = result.user
            console.log(userResult)
            setUserDetails(userResult);

            const email = userResult.email
            const creationTime = userResult?.metadata?.creationTime;
            const lastLoginTime = userResult?.metadata?.lastSignInTime
            const userContent = {email, creationTime, lastLoginTime} 

            fetch('https://assignment-10-tmw-southeast-asia-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userContent)
            })
            
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                // condition 
                if(data.insertedId){
                    toast.success('Sign In Successfully')

                }
            })
        })
        .catch(error => console.log(error.message))
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleAuth,
        githubAuth,
        logOut,
        loading,
        userDetails
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;