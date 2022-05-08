import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./index.css";
import Search from "../Search";
import avatar from "../Logo/img/9c23fb3fea95ce560ed99eb44ac99041.jpg";


const Header = ({searchText,changeText}) => {
    return (
        <header>
            <div>
                <logo>
                    <Logo />
                    
                </logo>
                
                 <nav>
                    <Search text={searchText} foo={changeText}/>
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Все посты</Link>
                    <Link to="/cart">
                        <p>JojoMemes@gmail.com</p>
                        <button type="button" className="btn-default">изменить</button></Link>
                    <img src={avatar} alt = {"avatar"}/>
                    
                </nav>
                
                </div>
        </header>
    )
}
export default Header;