import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";




function Nav(){


  useEffect(() => {
    fetchWeather();    
    }, []);
    
    
    const [tempValue,setTemp] = useState(false);
    const [auth,userHasAuthenticated] = useState(false);
    const history = useHistory();
    
        const fetchWeather = async () => {
            const temp = await Axios.get("/test")
              .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                //  setTemp(response.data.list[0].main.temp);
                const f = response.data;
                if(f!=="No"){
                  setTemp(true);
                  userHasAuthenticated(true);
                }
                
               
              });
        }


        async function logout() {
          await Axios.get("/logout");
        
          userHasAuthenticated(false);
        
          history.push("/compose");
        }


  



return <div className="header">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">D A I L Y</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item active"><Link to="/" className="nav-link">
          HOME <span className="sr-only">(current)</span></Link>
        </li>

        {auth ? <li className="nav-item "><Link to="/compose" className="nav-link">
        COMPOSE</Link>
        </li> : null }




        
        
        <li className="nav-item "><Link to="/about" className="nav-link">
        ABOUT US</Link>
        </li>
        
        <li className="nav-item "><Link to="/contact" className="nav-link">
        CONTACT US</Link>
        </li>
        
        <li className="nav-item "><Link to="/weather" className="nav-link">
        WEATHER</Link>
        </li>

        {auth ? <li className="nav-item"><button type="button" class="btn btn-outline-danger" onClick={logout}>Sign Out</button></li> : null}

      </ul>
    </div>
  </div>

</nav>
</div>
}

export default Nav;