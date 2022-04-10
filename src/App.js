
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';


const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error('error', error)
    })
    
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn} >Sign in by Google</button>
    </div>
  );
}

export default App;
