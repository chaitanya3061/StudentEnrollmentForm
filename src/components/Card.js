
import React from "react";

function Card(props) {
  return (
    <div className="card1">
      <div className="top1">
        <h4 className="name1">{props.name}</h4>
        <img className="circle-img1" src={props.image} alt={props.key}/>
      </div>
      <div className="bottom1">
      <p className="info1">Gender:-{props.gender}</p>
        <p className="info1">Skills:-{props.skills}</p>
        <p className="info1">Email:-{props.email}</p>
        <p className="info1">Website:-{props.Website}</p>
      </div>
    </div>
   
  );
}

export default Card;
