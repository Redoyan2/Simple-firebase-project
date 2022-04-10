
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
      setUser(result.user);
      console.log(result.user);
      
    })
    .catch(error=>{
      console.error('error', error)
    })
    
  }

  const handleGoogleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      setUser({});
    })
    .catch(error=>{
      setUser({});
      console.error('error', error);
    })
  }
  return (
    <div className="App">
      {
        user.email ? <button onClick={handleGoogleSignOut}>Google Sign Out </button>
         : 
        <button onClick={handleGoogleSignIn} >Sign in by Google</button>
      }

      <h1>Name: {user.displayName}</h1>
      <h2>Email:{user.email}</h2>
      
      <img src={user.photoURL} alt="" />

      
     
    </div>
  );
}

export default App;
