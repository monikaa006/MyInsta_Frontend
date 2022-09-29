import React from 'react'
import "./StyleSheet2/Requests.css"
import {useNavigate} from 'react-router-dom'

function Requests() {
    const navigate =useNavigate()
    const handleSwitch =()=>{
     navigate("/")
    }
  return (
    <div>
   
    <section class="main">
        <div class="wrapper"> 
            
            <div class="right-col">
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="https://i.pinimg.com/736x/d9/73/21/d97321e8dafdf5a96d4864e2621869e4.jpg" alt=""/>
                    </div>
                    <div>
                        <p class="username">pandolemony</p>
                        <p class="sub-text"></p>
                    </div>
                    <button class="action-btn" onClick={handleSwitch} >switch</button>
                </div>
                <p class="suggestion-text">Suggestions for you</p>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="https://i0.wp.com/wikiwiki.in/wp-content/uploads/2018/09/Virat-Kohli-Crickter.jpg?fit=1280%2C720&ssl=1" alt=""/>
                    </div>
                    <div>
                        <p class="username">Virat_Kohli</p>
                        <p class="sub-text">followed bu user</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="https://img.jagranjosh.com/imported/images/E/GK/anushka-sharma-biography.jpg" alt=""/>
                    </div>
                    <div>
                        <p class="username">Anushka Sharma</p>
                        <p class="sub-text">followed bu user</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="https://www.pinkvilla.com/files/styles/ld-image/public/mr_3.jpg" alt=""/>
                    </div>
                    <div>
                        <p class="username">Mony Roy</p>
                        <p class="sub-text">followed bu user</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="https://www.suntiros.com/wp-content/uploads/2016/12/Varun-Dhawan-Latest-New-Photos-Download.jpg" alt=""/>
                    </div>
                    <div>
                        <p class="username">Varun Dhavan</p>
                        <p class="sub-text">followed bu user</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="https://cdn.statusqueen.com/dpimages/thumbnail/dp_image114-900.jpg" alt=""/>
                    </div>
                    <div>
                        <p class="username">shree_krishna_channel</p>
                        <p class="sub-text">followed bu user</p>
                    </div>
                    <button class="action-btn">follow</button>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Requests
