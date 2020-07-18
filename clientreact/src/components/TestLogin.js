import React, { useState, useEffect } from "react";
import Axios from "axios";
import { use } from "passport";

function TestLogin(){

    
    useEffect(() => {
        fetchData();    
        }, []);
    

    const [test, changetest] = useState("");
    

    const fetchData = async () => {
        const temp = await Axios.get("/test")
        .then (function(response){
            console.log(response.data);
            console.log(response.status);
            
            changetest(response.data);
           
            
            
            
        });

    }

    return test;
}


export default TestLogin;