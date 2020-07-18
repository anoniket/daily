import React,{useState,useEffect} from "react";
import Axios from "axios";


function Post(match){
    
    console.log(match.match.params.xyz);

    useEffect(() => {
        fetchBlog();
    },[]);


    const [post,setpost] = useState({
        postTitle:"",
        postBody:""
    });

    const url = "/posts/"+match.match.params.xyz
   
    const fetchBlog = async () => {
        const data = await Axios.get(url)
        .then(function (response) {
       console.log(response.data);
        setpost({
            postTitle:response.data.blogTitle,
            postBody:response.data.blogBody
        })
      
         
        });
    
        
       }; 


    return <div className="container" id="body">
<h1>{post.postTitle}</h1>
<p>{post.postBody}</p>
    </div>
}

export default Post;