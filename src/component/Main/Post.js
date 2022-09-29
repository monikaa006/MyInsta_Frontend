import React, { useEffect, useState } from 'react'
import Requests from './Requests'
import "./StyleSheet2/Post.css"
import axios from 'axios'


function Post() {
    const [isActive, setIsActive] = useState(true);
    const [posts,setPosts]=useState([]);

    const loaduser = async () => {
         await axios.get('http://localhost:3005/products').then((res)=>{
            console.log("dfghjk",res)
            console.log(res.data)
            setPosts(res.data)
            console.log("lllllll",posts)
        }).catch((err)=>{
            console.log(err)
        })
       
       

      };

 
      
      useEffect(() => {

        loaduser();
      },[]);
    
    
    const like = ()=>{
        setIsActive(current => !current);
       
        //alert("like")

    }
  return (
    <div>
      <section class="main" style={{marginTop:'0px'}}>
    <div class="wrapper">
        <div class="left-col">
           {
            posts.map((post,index)=>(
               
         <div>
            <div  class="post" key={post.id}>
                <div class="info">
                    <div class="user">
                        <div class="profile-pic"><img src={post.profieUrl} alt=""/></div>
                        <p class="username">{post.user}</p>
                    </div>
                   
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBEHZhJGtqfy2XZ45ZZMiDWe5nw4cWxrEvXG2fbH-iV_c8EtNEQD4K0p1ymcfy2UG4Vw&usqp=CAU" class="options" alt=""/>
                </div>
            {post.postType==="video"?<iframe width="500" height="315"   src={post.url} title="YouTube video player"  autoplay></iframe>:
            <img src={post.url} style={{height:"50%"}} class="post-image" alt=""/>}
                
              
               { /*"https://www.youtube.com/embed/FxAG_11PzCk"*/}
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <div className='image'>
                            { 
                            isActive? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJynrVgkdvg9iptyH8YgmTpGTvcRK2Mk9UU1B8r7K5TP45GjMNZ5DdLlhvI8Kk5ypk4A&usqp=CAU"  onClick={like} style={{color:"red"}}
                            class="icon" alt="" />:<img src="https://www.nicepng.com/png/detail/778-7786050_download-instagram-like-icon-png.png"  onClick={like} style={{color:"red"}}
                            class="icon" alt="" />

                            }

                        </div>
                        
                        <img src="https://www.pinclipart.com/picdir/middle/571-5717511_sneak-peek-clip-art.png" class="icon" alt=""/>
                        <img src="https://cdn-icons-png.flaticon.com/512/786/786205.png" class="icon" alt=""/>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/save-3244517-2701888.png" class="save icon" alt=""/>
                    </div>
                    <p class="likes">1,012 likes</p>
                    <p class="description">{post.description}</p>
                    <p class="post-time">2 minutes ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="img/smile.PNG" class="icon" alt=""/>
                    <input type="text" class="comment-box" placeholder="Add a comment"/>
                    <button class="comment-btn">post</button>
                </div>
                
            </div>
            <br/><br/><br/><br/> 
          </div> 
        
        ))}
        <br/>
        </div>

        <Requests/>
    </div>
    
</section>
    </div>
  )
}

export default Post
