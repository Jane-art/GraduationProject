import React from "react";
import "./index.css";
import Card from "../Card";
import data from "../../data.json";
import fon from "../Logo/img/images.jpg"
import jojo from "../Logo/img/1.png"

const Main = ({search, setCnt}) => {
    const cards = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase())); //фильтр поиска
    setCnt(cards.length);

    const styles = {
        backgroundImage: `url(${fon})`,
        backgroundPosition: '50% 60%',
      }
      const stl = {
        backgroundColor: "#fff",
      }

    return (
        <main style={styles}>
            <div className="header__post">
                <h1> Невероятный <img alt = "Jojo" src={jojo}/>Блог</h1>
                    <div className="between">
                        <h5>Признавайся кто твой стенд?</h5>
                        <button type="submit" className="btn-primary" >
                        <span>Создать пост</span>
                        </button>
                    </div>
            </div>
            <div className="cards-container" style={stl}>
                {cards.map(el => <Card text={el.name} key={el.id} pic={el.picture} price={el.price} author={el.author} author__img={el.author__img} />)}
            </div>
        </main>
    )
}
export default Main;