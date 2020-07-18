import React, { useState, useEffect } from "react";
import Axios from "axios";
import Compose from "./Compose";
import Loader from 'react-loader-spinner';
import test from "./TestLogin";
import TestLogin from "./TestLogin";

function Composetest(){

    
var test = TestLogin();


        if(test!=="No"&&test!==""){
            return <Compose />
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

export default Composetest;