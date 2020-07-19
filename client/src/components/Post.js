import React,{useState,useEffect} from "react";
import Axios from "axios";
import Loader from 'react-loader-spinner';


function Post(match){
    
    console.log(match.match.params.xyz);

    useEffect(() => {
        fetchBlog();
    },[]);


    const [post,setpost] = useState({
        postTitle:"",
        postBody:""
    });

    const url = "/blog/"+match.match.params.xyz
   
    const fetchBlog = async () => {
        const data = await Axios.get(url)
        .then(function (response) {
       console.log(response.data);

       
       setTimeout(function(){
        setpost({
            postTitle:response.data.blogTitle,
            postBody:response.data.blogBody
        })

       },1000);

        
      
         
        });
    
        
       }; 

        if(post.postTitle===""){
            return <div
            style={{
               width: "100%",
               height: "100",
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
             }}
           >
           
             <Loader type="ThreeDots" color="#e4e3e3" height="100" width="100" />
             
           </div>
        } 

        else{
            return <div className="container" id="body">
            <h1>{post.postTitle}</h1>
            <p>{post.postBody}</p>
                </div>

        }

 
}

export default Post;