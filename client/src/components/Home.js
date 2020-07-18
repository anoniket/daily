import React, {useState, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import Loader from 'react-loader-spinner';
import OAuth from "./OAuth";
import Welcome from "./Welcome";
import TestLogin from "./TestLogin";
import Blog from "./Blog";





function Home(){

  var test = TestLogin();
  

    useEffect(() => {
      fetchBlog();    
      }, []);


      useEffect(() => {
        fetchName();    
        }, []);
    



    const [name, changename] = useState("");
    const [auth,userHasAuthenticated] = useState(false);
     

    const fetchName = async () => {
      const temp = await Axios.get("/test")
        .then(function (response) {
          console.log(response.data);
          console.log(response.status);
          //  setTemp(response.data.list[0].main.temp);
          const f = response.data;
          if(f!=="No"){
            changename(f);
            
            userHasAuthenticated(true);
          }
          
         
        });
  }






//iss [] ko htane pe code fat raha hai why?




    const [blog,setBlog] = useState([]);
    const [loadi,setlodi] = useState(true);
    
    // getName(test.googleName);
    
//why this async and await?

   const fetchBlog = async () => {
    const data1 = await Axios.get("/home")
    .then(function (response) {
      // handle success
      console.log(response.data);
      
    
      

      setTimeout(
        function() {
           
          setBlog(response.data);
          setlodi(false);
          
        }
        ,
       1000
    );
     

    

     
    });

    // console.log(blog.blogtitle);

   }; 
       

 
   

  async function deletePost(id) {
    var datai = {
      "idb" : id
    }
   await Axios.post("/delete",datai)
    .then(function(response){
      console.log(response.data);
      var m = response.data;
      if(m!="No"){

 

        setBlog(blog.filter(item => item._id !== id));
        
        
      }

     


    })

  }


  

      
  //  function oAuthGoogle(){
  //  Axios("/auth/google",{
  //   method: "GET",
  //   credentials: "include",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Credentials": true
  //   }
  //  })
  // }

      // function OAuth(){
      //     Axios.get("/auth/google")
      //     .then(function(response){
      //         console.log(response);
      //     })
      // }

        
            // if(tempValue!==""){
            //     return  <div> <h1>Weather in Jaipur is {tempValue} degree Celcius</h1>
               
            //     </div>
            //    } else{
            //        return <div
            //             style={{
            //                width: "100%",
            //                height: "100",
            //                display: "flex",
            //                justifyContent: "center",
            //                alignItems: "center"
            //              }}
            //            >
            //              <Loader type="ThreeDots" color="#e4e3e3" height="100" width="100" />
            //            </div>
            //    }
    
            


            



           
             
            if(loadi){
              if(test==="No"){
                return <Welcome /> 
              }

              else if(test!=="No" && blog.length===0){

                return (

              
              
                  <div
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
                
  
              
               );


                 
              }
              else {
                return <h1>first</h1>
              }
              
            }

            else if(!loadi){

              if(test!=="No" && blog.length!==0){

                return <div className="container" id="body">
            <h1 className="heading">Hello {name} </h1>
            
            {blog.map((blogFound,index)=>(
                <div key={index} className="homePosts">
                <div className="shadow-lg p-3 mb-5 bg-white rounded cc">
                {/* <div className="row">
                <div className="col-11">
                <h2> {blogFound.blogTitle}</h2>
                <p>{(blogFound.blogBody).substr(0,100)}.....<Link to={"/posts/"+blogFound._id}>Read More</Link></p>
                </div>
                <div className="col"><a className="delete"><i class="fas fa-trash" onClick={()=>console.log(blogFound._id)}></i></a>
                
                

                </div>

                </div> */}
                <Blog 
                  title={blogFound.blogTitle}
                  body={blogFound.blogBody}
                  id={blogFound._id}
                  onDelete={deletePost}
                />
               
                

                </div>
                
                
                </div>
               
            ))}
            
            </div>

              }

              else if(test!=="No" && blog.length===0){
                return (
                  <div className="container" id="body">
                  <h1> You have zero posts!</h1>
                </div>

                ); 
                
              }
              else{
                return <h1>second</h1>
              }
            }


          // else if(test!=="No" && blog.length!==0){
          //   return <div className="container" id="body">
          //   <h1 className="heading">Hello {name} </h1>
            
          //   {blog.map((blogFound,index)=>(
          //       <div key={index} className="homePosts">
          //       <div className="shadow-lg p-3 mb-5 bg-white rounded cc">
          //       {/* <div className="row">
          //       <div className="col-11">
          //       <h2> {blogFound.blogTitle}</h2>
          //       <p>{(blogFound.blogBody).substr(0,100)}.....<Link to={"/posts/"+blogFound._id}>Read More</Link></p>
          //       </div>
          //       <div className="col"><a className="delete"><i class="fas fa-trash" onClick={()=>console.log(blogFound._id)}></i></a>
                
                

          //       </div>

          //       </div> */}
          //       <Blog 
          //         title={blogFound.blogTitle}
          //         body={blogFound.blogBody}
          //         id={blogFound._id}
          //         onDelete={deletePost}
          //       />
               
                

          //       </div>
                
                
          //       </div>
               
          //   ))}
            
          //   </div>
          // }

          //  else if(test!=="No" && blog.length===0){
             
            

          //    return (

              
              
          //       <div
          //               style={{
          //                  width: "100%",
          //                  height: "100",
          //                  display: "flex",
          //                  justifyContent: "center",
          //                  alignItems: "center"
          //                }}
          //              >
                       
          //                <Loader type="ThreeDots" color="#e4e3e3" height="100" width="100" />
                         
          //              </div>
              

            
          //    );
                        
          //  }
          
           else {
             return <Welcome />
           }

          
          
           
       
           
      
            
          
            
}

export default Home;