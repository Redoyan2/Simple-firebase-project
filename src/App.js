
import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider =new GithubAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);

      })
      .catch(error => {
        console.error('error', error)
      })

  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubAuthProvider)
    .then(result=>{
      const user =result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })
  }

  // facebook
  const handleFacebookSignIn=()=>{
    signInWithPopup(auth, facebookAuthProvider)
    .then(result=>{
      const user = result.user;
      setUser(user);
    })
    .catch(error=>{
      console.error(error);
    })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
        console.error('error', error);
      })
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleGoogleSignOut}>Google Sign Out </button>
          :
          <div>
            <button onClick={handleGoogleSignIn} >Sign in by Google</button>
            <button onClick={handleGithubSignIn} >Sign in Github</button>
            <button onClick={handleFacebookSignIn} >Sign in by facebook</button>
          </div>
      }

      <h1>Name: {user.displayName}</h1>
      <h2>Email:{user.email}</h2>

      <img src={user.photoURL} alt="" />



    </div>
  );
}

export default App;
