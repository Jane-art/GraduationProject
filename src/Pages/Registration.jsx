import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import fon from "../components/Logo/img/images.jpg"


// описывает модель автора
class Author{
    constructor(id, authorImg, name, email, about){
      this.id = id;
      this.authorImg = authorImg;
      this.name = name;
      this.email = email;
      this.about = about;
    }
  } 



const Registration = props  => {
    const [post, setPost] = useState({}); //создаем переменные и функции их изменения
    const [val,updateVal] = useState();

    const [authorName,updateName] = useState();
    const [authorImg,updateImg] = useState();
    const [authorEmail,updateEmail] = useState();
    const [authorAbout,updateAbout] = useState();

    const changeText =(e) => {
        updateVal(e.target.value); //вызвать функцию updateVal и передать в неё новое значение переменной val
        updateImg(e.target.value)
    }
    //  вызов метода на изменение переменной после изменения поля imput
    const changeTextName =(e) => {
        updateName(e.target.value)
    }
    const changeTextEmail =(e) => {
        updateEmail(e.target.value)
    }
    const changeTextAbout =(e) => {
        updateAbout(e.target.value)
    }


    const styles = {
        backgroundImage: `url(${fon})`,
        backgroundPosition: '50% 60%',
      }

    // const avatar_style = {
    //     width : "160px",
    //     height : "160px",
    //     borderRadius: "15px",
    //     border: "5px solid #dd8dda",
    //     marginLleft: "50px",
    //     marginRight: "50px"
    // }

// создание нового автора для сохранения
    function handleSave(){
        console.log("Старт регистрации")

        console.log(authorImg);
        console.log(authorImg != "");
        console.log(authorImg != undefined);

        if ((authorImg == "")||(authorImg == undefined)){
            alert("Поле автарки пустое")
        } 
        else if ((authorName=="")||(authorName==undefined)){
            alert("Поле имя автора пустое")
        } 
        else if ((authorEmail=="")||(authorEmail==undefined)){
            alert("Поле email пустое")
        }
        else{
            let sendAuthor = new Author(
                Math.floor(Math.random() * 10000) + 1 ,
                authorImg,
                authorName,
                authorEmail,
                authorAbout
            )
            console.log("Всё ок")
            props.handleSave();
            api.postAuthor(sendAuthor);
        }
        console.log("Конец регистрации")
    }


        

    

    return (
        <div className='popup'>
            <div className='popup_inner' style={styles}>
                <div className="modalH1">
                    <h1>Регистрация</h1>
                </div>
                <div className="modal_header">
                    <div className="urlAndImg">
                        <img className="urlAndImg1" /*style={avatar_style}*/  src={val}/*src="https://avatanplus.com/files/resources/mid/58b9b6ed3db6115a95728ec5.png"*/ alt = {"avatar"}/>
                    </div> 
                    <div className="dataInput">
                        <div className="modal-title"><h3>Профиль</h3></div>
                        <label><input className="inputReg" placeholder="url avatar-a" type="text" name="avatar" onInput={changeText}/></label>
                        <label>Login<input className="inputReg" placeholder="ФИО" type="text" name="name" onInput={changeTextName} /></label>
                        <label>e-mail<input className="inputReg" placeholder="Email" type="text" name="email"  onInput={changeTextEmail}/></label>
                        <label>О себе<input className="inputReg" placeholder="about" type="text" name="about"  onInput={changeTextAbout}/></label>
                        <button className="btn-registration" onClick={props.handleClose}>Отмена</button>
                        <button className="btn-registration" onClick={handleSave}>Сохранить</button> 
                    </div> 
                </div>
            </div>
        </div>
      );
}

export default Registration;