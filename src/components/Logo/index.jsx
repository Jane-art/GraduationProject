import React from 'react';
import logo from "./img/unnamed.png";

const Logo = () => {
    return (
        <a href ="/" className="logo">
            <img alt = "Jojo" src={logo}
            width={50} height={50}
            className ="logo__pic"/>
        </a>
    )
}
export default Logo;