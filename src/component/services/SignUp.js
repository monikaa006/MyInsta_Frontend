import React, { useState } from 'react'
import './StyleSheet/SignUp.css'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';

function SignUp() {

  const navigate=useNavigate();
  const [crediential,setCrediential]=useState({
    username:"",
    email:"",
    password:""
  })
  const {username,email,password}=crediential

  const onInputChange = e => {
    setCrediential({ ...crediential, [e.target.name]: e.target.value });
  };

  const handleOnsubmit=(e)=>{
    e.preventDefault();
      axios.post("http://localhost:3000/api/user/signup",crediential).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  navigate("/Home")
  }


  return (
    <div>
      <main>
       <div className="page">
      <div className="header">
        <h1 className="logo">Instagram</h1>
        <p>Sign up to see photos and videos from your friends.</p>
        <button><i className="fab fa-facebook-square"></i> Log in with Facebook</button>
        <div>
          <hr/>
          <p>OR</p>
          <hr/>
        </div>
      </div>
      <div  className="container">
        <form action="">
          <input type="text" name='email'
                                    value={email}
                                    onChange={e => onInputChange(e)}  placeholder="Mobile Number or Email"/>
          <input type="text" placeholder="Full Name"/>
          <input type="text"  name='username' value={username} onChange={e => onInputChange(e)} placeholder="Username"/>
          <input type="password" name='password'
                                    value={password}
                                    onChange={e => onInputChange(e)} placeholder="Password"/>
          <button onClick={handleOnsubmit}>Sign up</button>
        </form>
        
        <ul>
          <li>By signing up, you agree to our</li>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Data Policy</a></li>
          <li>and</li>
          <li><a href="/">Cookies Policy</a> .</li>
       </ul>
      </div>
  </div>
  <div className="option">
     <p>Have an account? <a href="/">Log in</a></p>
  </div>
  <div className="otherapps">
    <p>Get the app.</p>
    <div className="icons">
                            <Link to={"/appstore"}>
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="appstore" />
                            </Link>
                            <Link to={"/googleplay"}>
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="googleplay" />
                            </Link>
                        </div>
   
  </div>
  <div className="footer">
    <ul>
      <li><a href="/">ABOUT</a></li>
      <li><a href="/">HELP</a></li>
      <li><a href="/">PRESS</a></li>
      <li><a href="/">API</a></li>
      <li><a href="/">JOBS</a></li>
      <li><a href="/">PRIVACY</a></li>
      <li><a href="/">TEMS</a></li>
      <li><a href="/">LOCATIONS</a></li>
      <li><a href="/">TOP ACCOUNTS</a></li>
      <li><a href="/">HASHTAGS</a></li>
      <li><a href="/">LANGUAGE</a></li>
    </ul>
    <p>© 2020 PICTUREGRAM</p>
  </div>
</main>

    </div>
  )
}

export default SignUp
