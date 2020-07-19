import React, { useState } from "react";
import About from "./About";
import Compose from "./Compose";
import Contact from "./Contact";
import Post from "./Post";
import Home from "./Home";
import Nav from "./Nav";
import Weather from "./Weather";
import OAuth from "./OAuth";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Axios from "axios";
import Composetest from "./Composetest";
import Footer from "./Footer";
import ProfileTest from "./ProfileTest";
import Testing from "./Testing";




function App(){
  

  return (
  <Router>
  <div>
     <Nav />
     <Route path="/about" component={About} />
     <Route path="/compose" component={Composetest} />
     <Route path="/contact" component={Contact} />
     <Route path="/post/:xyz" component={Post} />
     <Route path="/" exact component={Home} />
     <Route path="/weather" component={Weather} />
     <Route path="/profile" component={ProfileTest} />
     <Route path="/admint" component={Testing} />
     
     {/* <Route path="/auth/google" component={OAuth} /> */}
     
    

  </div>
  <Footer />
  </Router>);
}

export default App;













// OLDER CODE TO UNDERSTAND THE LINK OF REACT AND NODE THROUGH AXIOS



// function App() {
  // const [h1text, seth1text] = useState("");
  // const [h1text2, seth1text2] = useState(h1text);

//   function updateH1(event) {
//     // console.log(event.target.placeholder);
   
//     seth1text(event.target.value);
//     // console.log(h1text);
//   }

//   function updateH12(event) {
//     seth1text2(h1text);
//     event.preventDefault();

//     var data = {
//     userName: h1text
    
// }

    

//   Axios.post("/sent",data)
//   .then(function(response){
//    console.log(response.data);
//   });
    
// }

  // return (
  //   // <div className="container">
  //   //   <h1>Hello {h1text2}</h1>
  //   //   <form onSubmit={updateH12}>
  //   //     <input
  //   //       onChange={updateH1}
  //   //       type="text"
  //   //       placeholder="What's your name?"
  //   //       value={h1text}
  //   //       name="name"
        

  //   //     />
  //   //     <button type="submit">Submit</button>
  //   //   </form>
  //   // </div>
  // );





  
// }

// export default App;
