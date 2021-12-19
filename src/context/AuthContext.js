import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase';

const AuthContext = React.createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export function AuthProvider(props) {
   const [currentUser, setCurrentUser] = useState();
   const [loading, setloading] = useState(true)

   function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password);
   }

   function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
   }
   
   function logout () {
      auth.signOut();
   }

   useEffect(() => {
      const unsubscribe =  auth.onAuthStateChanged(user => {
         setCurrentUser(user)
         setloading(false)
      })

      return unsubscribe
   }, [])

   const value = {
      currentUser,
      signup,
      login,
      logout
   }

   return (
      <AuthContext.Provider value={value}>
         {!loading && props.children}
      </AuthContext.Provider>
   )
}
