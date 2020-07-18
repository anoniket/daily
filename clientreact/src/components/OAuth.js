import React, {useState, useEffect} from "react";
import Axios from "axios";

function OAuth(){
  
    useEffect(() => {
        fetchAuth();    
        }, []);


        const fetchAuth = async () => {
            const temp = await Axios.get("/auth/google", {
               
              })
              .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                //  setTemp(response.data.list[0].main.temp);
                });
        }


return <h1>Auth</h1>
}

export default OAuth;