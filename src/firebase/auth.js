import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email,password)=> {
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doSignInWithEmailAndPassword =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
}
    
    
export const doSignINwithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);

    return result;
};

export const doSignOut = ()=>{
    return auth.signOut();
    
}