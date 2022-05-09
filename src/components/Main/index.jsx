import React from "react";
import "./index.css";
import {Switch, Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home";
import Catalog from "../../Pages/Catalog";
import Cart from "../../Pages/Cart";
import Post from "../../Pages/Post";
import fon from "../Logo/img/images.jpg"
import jojo from "../Logo/img/1.png"

const Main = ({search}) => {

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
            <Routes>
                <Route path="/catalog" element={<Home/>}/> 
                <Route path="/" element={<Catalog searchText={search}/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/post/:id" element ={<Post/>}/>
            </Routes>

        </main>
    )
}
export default Main;