import React, { useState } from 'react';
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import logo from './logo.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    try {

      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully');
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Store user data in Firestore with username and password
        await addDoc(collection(db, 'user'), { uid: user.uid, username: email, password: password });
        alert('Signed up successfully');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleAuth}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <button onClick={() => setIsLogin(!isLogin)}>
            Switch to {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> Hello World</p>
      </header>
    </div>
  );
}

export default App;