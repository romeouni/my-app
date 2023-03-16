import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { db } from "../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [role, setRole] = useState('');

    useEffect(() =>{
         const listen = onAuthStateChanged(auth, (user) =>{
            if(user) {
                userRole(user).then((rl) =>{
                    setRole(rl)
                    setAuthUser(user)
                });
            }else {
                setAuthUser(null);
                setRole(null);
            }
         });

         return () =>{
             listen();
         }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() =>{
            setRole(null);
            console.log('sign out successful');
        }).catch(error => console.log(error));
    }
    async function userRole(authUser){
        const docRef = doc(db, "users", authUser.uid);
        const docSnap = await getDoc(docRef);
        return String(docSnap.data().role);

    }
    return <div>{ authUser ?
        <>
            <p>{`Signed In as ${authUser.email}`}</p>
            <p>{`You are a ${role}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
        </> :
            <p>Signed Out</p>}
        </div>;
};

export default AuthDetails;