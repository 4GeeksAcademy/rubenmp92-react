import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "1rem",
        padding: "0"
      }}
    >
      <img src={props.image} className="card-img-top" alt="..." style={{width: "18rem"}} />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};

export default Card;
