import React from "react";
import "./Welcome.css";
import {Helmet} from "react-helmet";
import TestLogin from "./TestLogin";
import Home from "./Home";
function Welcome(){
     

    

        return <div className="homec">
    <Helmet>
                <style>{'body { background-color: #212529}'}</style>
            </Helmet>
    {/* {document.body.classList.add('background-red')} */}
    <h1 className="homeh">Enter the World of DAILY</h1>
    <button type="button" class="btn btn-outline-success btn-lg gbutton" onClick={() => {window.location.href="/auth/google"}}><i class="fab fa-google" style={{marginRight:"10px"}}></i>Sign In</button>
    <button type="button" class="btn btn-outline-success btn-lg" onClick={() => {window.location.href="/auth/google"}}><i class="fab fa-google" style={{marginRight:"10px"}}></i>Sign Up</button> 
   
     
</div>

    }

    

export default Welcome;