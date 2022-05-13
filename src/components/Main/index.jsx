import React, { useState, useEffect } from "react";
import "./index.css";
import {Switch, Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home";
import Catalog from "../../Pages/Catalog";
import Registration from "../../Pages/Registration";
import Post from "../../Pages/Post";
import fon from "../Logo/img/images.jpg"
import jojo from "../Logo/img/1.png"
import CreatePost from "../../Pages/CreatePost";

const Main = ({search, currentAuthor}) => {

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        if (currentAuthor == undefined){
            alert("Автор не известен, войдите в систему")
        }else{
            setIsOpen(!isOpen);
        }

      
    }  
    const togglePopupAndSaveData = (author) => {
        
      setIsOpen(!isOpen);
    } 
    

    const styles = {
        backgroundImage: `url(${fon})`,
        backgroundPosition: '100% 100%',
      }
      const stl = {
        backgroundColor: "#fff",
      }

    return (
        <main style={styles}>
            {isOpen && <CreatePost
                    currentAuthor = {currentAuthor}
                    handleClose={togglePopup}
                    handleSave = {togglePopupAndSaveData}
                />}
            <div className="header__post">
                <h1> Невероятный <img alt = "Jojo" src={jojo}/>Блог</h1>
                    <div className="between">
                        <button type="submit" className="btn-primary" onClick={togglePopup}  >
                        <span>Создать пост</span>
                        </button>
                    </div>
            </div>
            <div style={stl}>
            <Routes>
                <Route path="/catalog" element={<Home/>}/> 
                <Route path="/" element={<Catalog searchText={search}/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/post/:id" element ={<Post/>}/>
            </Routes>
            </div>

        </main>
    )
}
export default Main;