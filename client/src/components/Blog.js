import React from "react";
import {Link} from "react-router-dom";

function Blog(props){

    function handleClick() {
        props.onDelete(props.id);
      }
    
      return (
        <div className="row">
                <div className="col-11">
                <h2> {props.title}</h2>
                <p>{(props.body).substr(0,100)}.....<Link to={"/post/"+props.id}>Read More</Link></p>
                </div>
                <div className="col"><a className="delete"><i class="fas fa-trash" onClick={handleClick}></i></a>
                
                

                </div>

                </div>
      );



}

export default Blog