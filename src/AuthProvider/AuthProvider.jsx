/* eslint-disable react/prop-types */
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "./../FIirebase/firebase";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //! User Observe
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        setLoading(false);
        if (currentUser) {
          axios
            .post("http://localhost:5000/jwt", loggedUser, {
              withCredentials: true,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
        } else {
          axios.post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          });
        }
      });
    };
    return () => unsubscribe();
  }, []);

  //! Sign in User

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! Logout user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
