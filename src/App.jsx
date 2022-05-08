import React, {useState} from "react";
import {RouterProps, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";

const App = () => {
    const [searchText, changeText] = useState("");
    const [searchCnt, setCnt] = useState(0); //колличество найденных запросов => App
    return (
        <div className="container">
            <Header searchText ={searchText} changeText={changeText}/> 
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog searchText={searchText} setCnt={setCnt}/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            
            <Footer />
        </div> // подключаем страницы
    )
}

export default App;