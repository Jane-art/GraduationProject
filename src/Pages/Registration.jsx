import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";

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
    const [post, setPost] = useState({});
    const [val,updateVal] = useState();

    const [authorName,updateName] = useState();
    const [authorImg,updateImg] = useState();
    const [authorEmail,updateEmail] = useState();
    const [authorAbout,updateAbout] = useState();

    const changeText =(e) => {
        updateVal(e.target.value); //вызвать функцию updateVal и передать в неё новое значение переменной val
        updateImg(e.target.value)
    }
    const changeTextName =(e) => {
        updateName(e.target.value)
    }
    const changeTextEmail =(e) => {
        updateEmail(e.target.value)
    }
    const changeTextAbout =(e) => {
        updateAbout(e.target.value)
    }

    /*useEffect(() => {
        //console.log(api.getAuthorById(0));
        //api.getPostProduct();
        api.getAuthorById(0).then(data => {
            console.log(data);
            setPost(data);
        })
    }, []);*/

    const document_hidden={
        width: "0px",
         height: "0px", 
         overflow: "hidden", 
         outline: "none",
    }

    const document_modal={
        width: "520px",
        transformOrigin : "697.5px -51px",
    }

    const avatar_style = {
        width : "60px",
        height : "60px",
        borderRadius: "15px",
        border: "5px solid #dd8dda"
    }

    function closePopup(){
        console.log("ffff");
    }


    function handleSave(){
        let sendAuthor = new Author(
            Math.floor(Math.random() * 10000) + 1 ,
            authorImg,
            authorName,
            authorEmail,
            authorAbout
        )

        props.handleSave();
        api.postAuthor(sendAuthor);
    }

    

    return (
        <div className='popup'>
          <div className='popup_inner'>
            <div className="modalH1">
                <h1>Регистрация</h1>
            </div>
            <div className="modal-header">
                    <div className="modal-title"><h3>Профиль</h3></div>

                    <div className="urlAndImg">  
                        <div>
                            <input placeholder="url avatar-a" type="text" name="avatar" onInput={changeText} /*value="image\9c23fb3fea95ce560ed99eb44ac99041.jpg"*//>
                        </div>
                        <div>
                            <img style={avatar_style}  src={val}/*src="https://avatanplus.com/files/resources/mid/58b9b6ed3db6115a95728ec5.png"*/ alt = {"avatar"}/>
                        </div>
                    </div> 
                    <div className="dataInput">
                        <label>Login<input className="inputReg" placeholder="ФИО" type="text" name="name" onInput={changeTextName} /></label>
                        <label>e-mail<input className="inputReg" placeholder="Email" type="text" name="email"  onInput={changeTextEmail}/></label>
                        <label>about<input className="inputReg" placeholder="about" type="text" name="about"  onInput={changeTextAbout}/></label>
                    </div>
            </div>
            <div className="regButtons">
                <button className="btn-registration" onClick={props.handleClose}>Отмена</button>
                <button className="btn-registration" onClick={handleSave}>Сохранить</button>
            </div>
          </div>
        </div>
      );
}

export default Registration;