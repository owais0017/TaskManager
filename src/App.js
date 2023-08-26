import './App.css';
import React, { useState } from 'react';
import Searchbar from './searchbar';
import MyComponent from './background';
import Login from './login';
import Signup from './signup';



function App() {
  const [change, setChange] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmitSignup() {

    fetch("http://localhost:3001/signup", {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'success') {
          setChange('login')
        }
        else
          alert('email already exists');
      }).catch(error => {
        console.error("Network error or other issue:", error);
        alert('An error occurred while processing your request');
      });
  }

  const handleSignup = (e) => {
    e.preventDefault();
    handleSubmitSignup();
  }


  const handleClick = (newState) => {
    setChange(newState);
  }


  function handleSubmitlogin() {

    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'success') {
          setChange('home');
        }
        else
          alert('wrong credentials');
      });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmitlogin();
  }

  return (
    <div className="App">
      {
        (change === 'signup') ? (
          <div>
            <Signup handleSignup={handleSignup}
              setEmail={setEmail}
              setPassword={setPassword} />
            <MyComponent />
          </div>

        )
          : (change === 'login') ? (
            <div>

              <Login
                handleClick={() => { handleClick('signup') }}
                handleFormSubmit={handleFormSubmit}
                setEmail={setEmail}
                setPassword={setPassword}
              />
              <MyComponent />

            </div>

          ) : (
            <div>
              <Searchbar />
              <MyComponent />
            </div>
          )}
    </div>

  );
}

export default App;
