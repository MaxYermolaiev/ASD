import React from 'react';
import  './Main.css';
import Post from './Post/Post';
 const Main = ()=>{
     return(
<div className="Main_content">
       <div>
          <textarea></textarea>
          <button>new post</button>
          <button>remove</button>
       </div>
   <Post/>
   <Post/>
   <Post/>
   <Post/>
</div>
     );
}
export default Main;