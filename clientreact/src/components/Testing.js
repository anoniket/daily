import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from 'react-loader-spinner';

function Testing(){

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

if(test!==""){
    return (<h1>{test}</h1>);
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


export default Testing;
