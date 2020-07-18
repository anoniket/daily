import React from "react";
import TestLogin from "./TestLogin";
import Profile from "./Profile";
import Loader from 'react-loader-spinner';


function ProfileTest(){
    var test = TestLogin();


    if(test!=="No"&&test!==""){
        return <Profile />
    }

    else if (test ==="No"){
        return <div className="container centerit" id="body">
        <h1>Sign in Needed</h1> 
        <button type="button" class="btn btn-outline-danger btn-lg gbutton"><i class="fab fa-google" style={{marginRight:"10px"}}></i>Sign In</button>
<button type="button" class="btn btn-outline-danger btn-lg"><i class="fab fa-google" style={{marginRight:"10px"}}></i>Sign Up</button>
    </div>
    }
    else{
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
 


}


export default ProfileTest;