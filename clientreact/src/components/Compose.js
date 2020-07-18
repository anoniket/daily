import React, { useState, useEffect } from "react";
import { set } from "lodash";

import {Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import Home from "./Home";

function Compose(){

   
    // useEffect(() => {
    //     submitBlog();    
    //     }, []);

    
    const history = useHistory();
     
    const [blog,setBlog] = useState({
        postTitle:"",
        postBody:""
    })

    // const [blogSubmit,setSubmit] = useState(false);

     
    function changeBlog(event){
        // console.log(event.target.value);

        var typeo = event.target.name;
        // console.log(typeo);
        var matter = event.target.value;

        setBlog(prevVal => {
            if(typeo==="postTitle"){
                return{
                    postTitle:matter,
                    postBody:prevVal.postBody
                }
            }else if(typeo==="postBody"){
                return{
                    postTitle:prevVal.postTitle,
                    postBody:matter
                }
            }
        })

        // console.log(blog);


    }


    
  var ss ="";
     

   function submitBlog(event){
        // console.log(blog);
        event.preventDefault();
        
        
          Axios.post("/composeit",blog)
         .then (function(response){
                   console.log(response.data);
                   console.log(response.status);
                   
                

                   ss=response.data;

                   history.push("/");
               })


          
        
        



        // Axios.get("/test")
        // .then (function(response){
        //     console.log(response.data);
        //     console.log(response.status);
            // if(response.status===200){
            //     setSubmit(true);
            // }
            

            //there are two methods for redirecting, one using histor push other using redirect to, which uses a state of variable
            //in final return statemtn, use ternary operator

        // });

    }

         

       return ( <div className="container" id="body">
       <h1 className="heading">Compose</h1>

       <form onSubmit={submitBlog}>
       <div className="form-box">
       <label for="formHeading">Title</label>
       <div className="form-group">

       <input type="text" onChange={changeBlog} className="form-control form-heading" name="postTitle" placeHolder="What is it about?" autoComplete="off"/>
       
       </div>
       <label for="formMatter">Post</label>
       
       <div class="form-group">
       
       <textarea class="form-control" onChange={changeBlog} rows="8" cols="80" name="postBody"></textarea>
       
       </div>
       
       <button class="btn btn-outline-dark" type="submit" name="button">Post</button>

       </div>
       </form>
       </div>);
        
           
        

        
    
  

}



export default Compose;


{/* <div class="form-box">
    <label for="formHeading">Title</label>
    <div class="form-group">
      <input type="text" class="form-control form-heading" name="postTitle" placeholder="What is it about?" autocomplete="off">
    </div>
    <label for="formMatter">Post</label>
    <div class="form-group">
    <textarea class="form-control" rows="8" cols="80" name="postBody"></textarea>
    </div>
      <button class="btn btn-outline-dark" type="submit" name="button">Post</button>
  </div> */}