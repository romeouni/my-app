import React, { useState }  from 'react';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                return setDoc(doc(db, "users", userCredential.user.uid),{
                    role: "donor"
                });
            }).then((userCredential) => {
        })
            .catch((error) => {
                console.log(error);
            });
    }
    return(
        <div className = 'sign-in-container'>
            <form onSubmit={signUp}>
                <h1>Create an Account</h1>
                <input
                    type = "email"
                    placeholder = "Enter email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type = "password"
                    placeholder = "Enter password here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                    type = "text"
                    placeholder = "Enter address here"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;
