import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged , getAuth, signOut} from 'firebase/auth';
import { ProtectedRoute } from './protectedRoute.jsx';
import Create from './Create';
import Navbar from './Navbar';
import SignIn from './SignIn';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log(user)
        setUser(user);
        return;
      }

    });
    return ()=> unsubscribe();
  },[]);

  function handleLogout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null);
      console.log("Sign out")
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navbar user={user} handleSignout={handleLogout}/>}/>
          <Route path="/Login" element={<SignIn user={user} />} />
          <Route path="/create" element={<ProtectedRoute user={user}>
          <Create/>
          </ProtectedRoute>}>
          </Route>
        </Routes>
        <quizCreate/>

      </div>
    </BrowserRouter>
  );
}

export default App;