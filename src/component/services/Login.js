import React, { useState } from 'react'
import "./StyleSheet/Login.css"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';

function Login() {
    const navigate=useNavigate();
    const [crediential,setCrediential]=useState({
        email:"",
        password:""
    });

    const {email,password}=crediential

   
    const onInputChange = e => {
        setCrediential({ ...crediential, [e.target.name]: e.target.value });
      };


      const handleSubmit =(e)=>{
      e.preventDefault();
      if(email===""){
        alert("please enter email first")
      }
      else if(password===""){
        alert("please enter password first")
      }
      else{
      axios.post("http://localhost:3000/api/user/signin",crediential).then((res)=>{
        console.log(res)
      localStorage.setItem("token",res.data.token)
      }).catch((err)=>{
        console.log(err)
      })

      navigate("/Home")
    }
      }
    
    return (
        <div>
            <div className="wrapper">
                <div className="header">
                    <div className="top">
                        <div className="logo">
                            <img
                                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                                alt="instagram"
                                style={{ width: "175px" }}
                            />
                        </div>
                        <div className="form">
                            <div className="input_field">
                                <input
                                     name="email"
                                     value={email}
                                     onChange={e => onInputChange(e)} required 
                                    type="text"
                                    placeholder="Phone number, username, or email"
                                    className="input"
                                />
                            </div>
                            <div className="input_field">
                                <input
                                    type="password"
                                    name='password'
                                    value={password}
                                    onChange={e => onInputChange(e)} required 
                                    placeholder="Password"
                                    className="input"
                                />
                            </div>
                          
                                <button className='btn btn-primary'  style={{width:"100%"}}  onClick={(e)=>{handleSubmit(e)}} >Log In</button>
                           
                        </div>
                        <div className="or">
                            <div className="line"></div>
                            <p>OR</p>
                            <div className="line"></div>
                        </div>
                        <div className="dif">
                            <div className="fb">
                                <p>Log in with Facebook</p>
                            </div>
                            <div className="forgot">
                                <Link to={"/forgot-password"}>Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                    <div className="signup">
                        <p>
                            Don't have an account? <Link to={"/signUp"}>Sign up</Link>
                        </p>
                    </div>
                    <div className="apps">
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
                </div>
                <div className="footer">
                    <div className="links">
                        <ul>
                            <li>
                                <Link to={"/about-us"}>ABOUT US</Link>
                            </li>
                            <li>
                                <Link to={"/support"}>SUPPORT</Link>
                            </li>
                            <li>
                                <Link to={"/press"}>PRESS</Link>
                            </li>
                            <li>
                                <Link to={"/api"}>API</Link>
                            </li>
                            <li>
                                <Link to={"/jobs"}>JOBS</Link>
                            </li>
                            <li>
                                <Link to={"/privacy"}>PRIVACY</Link>
                            </li>
                            <li>
                                <Link to={"/terms"}>TERMS</Link>
                            </li>
                            <li>
                                <Link to={"/directory"}>DIRECTORY</Link>
                            </li>
                            <li>
                                <Link to={"/profile"}>PROFILES</Link>
                            </li>
                            <li>
                                <Link to={"/hashtag"}>HASHTAGS</Link>
                            </li>
                            <li>
                                <Link to={"/language"}>LANGUAGE</Link>
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div className="copyright">© 2019 INSTAGRAM</div>
                </div>
            </div>
        </div>
    )
}

export default Login
