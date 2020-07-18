import React, {useState, useEffect} from "react";
import Axios from "axios";

import Loader from 'react-loader-spinner';

function Weather(){
  
useEffect(() => {
fetchWeather();    
}, []);


const [tempValue,setTemp] = useState("");
const [temptype, setTemptype] = useState("");
const [imgurl,setimgurl] = useState("");



    const fetchWeather = async () => {
        const temp = await Axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
              q : "jaipur",
              appid:"937f0ae200b82a1a66f60b6ad3e7e3e0",
              units : "metric"
            }
          })
          .then(function (response) {
            console.log(response.data.main.temp);
            console.log(response.status);
            //  setTemp(response.data.list[0].main.temp);
            setTimeout(
                function() {
                    setTemp(response.data.main.temp);
                    setTemptype(response.data.weather[0].main);
                    setimgurl( "http://openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png");
                    
                }
                ,
               1500
            );
           
          });
    }

    if(tempValue!==""){
        return  <div className="container weat" id="body"> <h1>Weather in Jaipur is {tempValue} degree Celcius  </h1>
        <h2>It is {temptype}</h2>
        <img src={imgurl}></img>
       
        </div>
       } else{
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

export default Weather;