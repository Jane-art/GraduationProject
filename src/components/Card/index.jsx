import React from "react";
import "./index.css";

const Card = (props) => {
    let div_style = {
        
        width : "300px",
    };

    let st ={
        backgroundImage: `url(${props.pic})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff"
    };

    let st__author__img ={
        backgroundImage: `url(${props.author__img})`,
        backgroundSize: "contain",
        backgroundPosition: '50% 60%',
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff"
    };
    return (
        <div className="card" style={div_style}>
            <div className="author__img" style={st__author__img}></div>
            <div className="card__author">{props.author}</div>
            <div className="card__img" style={st}></div>
            <div className="card__price">{props.price}</div>
            <div className="card__text">{props.text}</div>
        </div>
    )
}
export default Card;