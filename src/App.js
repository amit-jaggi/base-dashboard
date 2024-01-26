import './App.css';
import React, { useState } from 'react';
import { userDetails } from './utils/constants';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';


const App = () => {
  const [signIn, setSignIn] = useState({
    signBtn: false,
    loginIn: false,
  });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignIn({
      signBtn: true,
      loginIn: false,
    });
    // Handle form submission here, e.g., send data to a server

    if ((formData.email !== '') && (formData.password !== '')) {
      try {
        if ((formData.email === userDetails.email) && (formData.password === userDetails.password)) {
          setTimeout(() => {
            // alert('Login Successful...');
            setSignIn({
              signBtn: false,
              loginIn: true,
            })
          }, 2000);
        } else {
          alert('Incorrect Email ID/Password');
            setSignIn({
              signBtn: false,
              loginIn: false,
            })
        }
        setFormData({
          email: '',
          password: ''
        });
      } catch (err) {
        console.log(err);
      }
    } else alert(`Please enter Email / Password..`);    
  };

  return (
    <div>
      {
        signIn.loginIn
          ? <Dashboard />
          : <SignUp
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            signIn={signIn}
          />
      }
    </div>
  );
}

export default App;
