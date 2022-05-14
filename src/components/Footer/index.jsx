import React from "react";
import Logo from "../Logo";
import "./index.css";

const Footer =() => {
    return (
        <footer>
            <div>
                <Logo/>
                <p>Is that a JoJo reference?</p>
                <h5>&copy;2022</h5>
                </div>
                <div>
                    <h1>О проекте</h1>
                <ul>
                    <li><a href="">Уютное сообщество, где пользователи сами создают множество уникальных постов</a></li>   
                </ul>
                <ul>
                    <li><a href="">Читатели с помощью голосов определяют, какие посты самые интересные.</a></li>
                </ul>
                </div>
                <div>
                   <h4>Контакты</h4>
                   <a className="blank"  target ="_blank" href="https://vk.com/z.egorova">Я в VK</a>
                   <br/>
                </div>
        </footer>
    )
}

export default Footer;