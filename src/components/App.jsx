import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

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
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navbar user={user}/>}/>
          <Route path="/Login" element={<SignIn user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;