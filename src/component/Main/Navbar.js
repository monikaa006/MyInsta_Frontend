import React from 'react'
import { useNavigate } from 'react-router-dom'
import './StyleSheet2/Navbar.css'


function Navbar() {
  const navigate=useNavigate()
  const handleMessage=()=>{
    navigate("/Message")
  }
  const handleProfile=()=>{
    navigate("/Profile")
  }
  return (
    <div>
      <nav class="navbar">
        <div class="nav-wrapper">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" class="brand-img" alt=""/>
        <input type="text" class="search-box" placeholder="search"></input>
        <div class="nav-items">
            
            <img src="https://www.clipartmax.com/png/small/350-3509293_residential-quarters-apartment-home-icon-instagram-home-icon-vector.png" class="icon" alt=""/>
            <img src="https://e7.pngegg.com/pngimages/633/901/png-clipart-messenger-icon-social-media-computer-icons-facebook-messenger-black-facebook-messenger-logo-miscellaneous-angle.png" onClick={handleMessage} class="icon" alt=""/>
            <img src="https://cdn-icons-png.flaticon.com/512/6537/6537806.png" class="icon" alt=""/>
            <img src="https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png" class="icon" alt=""/>
            <img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png" onClick={handleProfile} class="icon" alt=""/>
           
            <div class="icon user-profile"></div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar
