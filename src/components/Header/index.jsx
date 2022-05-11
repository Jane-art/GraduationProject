import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./index.css";
import Search from "../Search";
import avatar from "../Logo/img/9c23fb3fea95ce560ed99eb44ac99041.jpg";
import api from "../../Api";
import Registration from "../../Pages/Registration";

const Header = ({searchText, changeTextLookUp, currentAuthor, setCurrentAuthor}) => {
    let center = {
        verticalAlign: "middle",
        display: "flex",
        overflow: "hidden",
        //alignItems: "right",
        float: "right",
        position:"relative",
        justifyContent: "space-evenly",
       
        width : "600px",  
        height : "80px"
    }
    
    let div_login_visible = {
        visibility : "visible",
        alignItems: "center",
        justifyContent: "space-evenly",
        overflow: "hidden",
        display: "flex",
        //alignItems: "right",
        //verticalAlign: "middle",
        //top : "10px",
        right : "10px",
        width : "400px", 
        //left: "50%",
        top: '50%',
        transform: "translate(0,-50%)",
        position: "absolute",
        //zIndex : "1" 
    }

    let div_login_hidden = {
        visibility : "hidden",
        justifyContent: "space-evenly",
        //alignItems: "right",
        overflow: "hidden",
        //display: "flex",
        //top : "0px",
        width : "200px",
        //left: "50%",
        top: '50%',
        transform: "translate(0,-50%)",
        right : "10px",
        position: "absolute",
        //zIndex : "2"       
    }
    const [exitBTN, setStyleExit] = useState(div_login_hidden);
    const [count, setStyleLogin] = useState(div_login_visible);
    const [input_value, setValue] = useState("");

    //сохранаяем автора
    const [post, setPost] = useState({});

    const [saveauthor, setAuthor] = useState({});

    // автор по email
    const getData = function() {
        console.log(input_value)
        if (input_value==""){
            alert("Поле email пустое")
        }else{
            api.getAuthorById(input_value)
            .then(data => {
                
                setPost(data);
                // console.log("input_value : " + input_value);
                // console.log("post.email : " + data.email);
                if (data.email===input_value){
                    setStyleLogin(div_login_hidden);
                    setStyleExit(div_login_visible);

                }
                setCurrentAuthor(JSON.stringify(data))
                //setSendRequest(false);
            })
        }
        /*.then (x => 
            { 
                console.log("input_value : " + input_value);
                console.log("post.email : " + x.email);
                //if ()
            }
        )*/
    } 
        
    const avatar_style = {
        width : "60px",
        height : "60px",
        borderRadius: "15px",
        border: "5px solid #dd8dda"
    }

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        //console.log("dfsdf");
      setIsOpen(!isOpen);
    }  
    const togglePopupAndSaveData = (author) => {

      setIsOpen(!isOpen);
    } 
    
    const userExit = function() {
        setCurrentAuthor(undefined);
        setStyleExit(div_login_hidden);
        setStyleLogin(div_login_visible);
    }

     const changeText =(e) => {
        setValue(e.target.value); //вызвать функцию updateVal и передать в неё новое значение переменной val
    }

        return (
            <header>

                {isOpen && <Registration
                    handleClose={togglePopup}
                    handleSave = {togglePopupAndSaveData}
                    
                />}

                <div className="header__main">
                    <div>
                        <logo>
                            <Logo />          
                        </logo>    
                    </div>

                    <div className="navMenu"> 
                        <div>
                            <Link to="/">Все посты</Link>
                        </div>
                        <div>
                            <Link to="/catalog">Главная</Link>
                        </div>
                        {/* 
                        <p>JojoMemes@gmail.com</p>
                        */}
                    </div> 

                    <div>     
                      
                        <Search text={searchText} foo={changeTextLookUp}/>
                    </div>
                    
                    <div style={center}>
                        <div style = {count}>
                            <div>
                                
                                <input placeholder="email" className="ant-input mb-2" type="text" onInput={changeText} name="name" />
                            </div>
                            <div>                              
                                <button type="button" className="btn-default" onClick={getData} >Войти</button>                            
                            </div>
                            <div>
                                <button type="button" className="btn-default" onClick={togglePopup} >Регистрация</button>
                            </div>

                        </div>
                        <div style = {exitBTN}>
                            <div>
                                <img style={avatar_style} src={post.authorImg} alt = {"avatar"}/>
                            </div>
                            <div>
                                <h2>{post.name} </h2>
                            </div>
                            <div>
                            <button type="button" className="btn-default" onClick={userExit}>выход</button>
                            </div>
                        </div>
                    </div>
                </div>         
            </header>
        )
}

export default Header;