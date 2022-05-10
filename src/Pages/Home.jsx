import React from "react";
import jojo from "../components/Logo/img/1.png"
import fon1 from "../components/Logo/img/images.jpg"

const Home =() => {

    const styl1 = {
        backgroundImage: `url(${fon1})`,
        backgroundPosition: '50% 60%',
      }

    return (
        <div style={styl1}>
                <h2> Этот блог посвящён манге "Невероятные приключения ДжоДжо" авторства Хирохико Араки. 
                    <br/>
                    <p>Невероятные приключения ДжоДжо, часто сокращаемая до JoJo или JJBA, - это франшиза манги и аниме, жанра Сёнэн и Сэйнэн, которая повествует о приключениях членов семьи Джостаров в разных поколениях.</p>
                </h2>
        </div>
    )
}

export default Home;