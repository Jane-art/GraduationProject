import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import fon from "../components/Logo/img/images.jpg"
import post from "../components/Header"

/*
class Author{
    constructor(id, authorImg, name, email, about){
      this.id = id;
      this.authorImg = authorImg;
      this.name = name;
      this.email = email;
      this.about = about;
    }
  } */ 

  class Card{
    constructor(id, authorImg, author, name, cardText, rating, picture, tags,){
      this.id = id;
      this.authorImg = authorImg;
      this.author = author;
      this.name = name;
      this.cardText = cardText;
      this.rating = rating;
      this.picture = picture;
      this.tags = tags;
      this.commends = [];
    }
  }


const CreatePost = (props)  => {

    // const [post, setPost] = useState({}); //создаем переменные и функции их изменения
    const [knownPost,knowPost] = useState();
    
    const [val,updateVal] = useState();

    const [postName,updateName] = useState();
    const [postText,updateText] = useState();

    const changeText =(e) => {
        updateVal(e.target.value); //вызвать функцию updateVal и передать в неё новое значение переменной val
    }
    //  вызов метода на изменение переменной после изменения поля imput
    const changeTextName =(e) => {
        updateName(e.target.value)
    }
    const changeTextPost =(e) => {
        updateText(e.target.value)
    }

    function handleSave(){
        
        /*let sendAuthor = new Author(
            Math.floor(Math.random() * 10000) + 1 ,
            authorImg,
            authorName,
            authorEmail,
            authorAbout
        )*/

        let sendAuthor = JSON.parse(props.currentAuthor);
        console.log(sendAuthor);
        
        

        if (knownPost){
            let sendCard = new Card(
                props.currentPost.id,
                sendAuthor.authorImg,
                sendAuthor.name,
                postName,
                postText,
                0,
                val,
                ["new","site-generated"],
                []
            )
            api.putPost(sendCard);
        }else{
            let sendCard = new Card(
                Math.floor(Math.random() * 10000000) + 1 ,
                sendAuthor.authorImg,
                sendAuthor.name,
                postName,
                postText,
                0,
                val,
                ["new","site-generated"],
                []
            )
            api.postPost(sendCard);
        }
        //console.log(sendCard);
        props.handleSave();
    }

    useEffect(() => {
        //api.getPostProduct();
        
        //knowPost(!(props.currentPost == undefined));
        if (props.currentPost == undefined){
            knowPost(false)
        }else{
            knowPost(true)
            console.log(props.currentPost.name);
            updateVal(props.currentPost.picture);
            updateName(props.currentPost.name);
            updateText(props.currentPost.cardText);
        }
    }, []);


    const styles = {
        backgroundImage: `url(${fon})`,
        backgroundPosition: '50% 60%',
      }

    return (
        <div className='popup' >
            <div className='popup_inner_createPost' style={styles}>
                
                {knownPost && <div className="modalPost">
                    <div className="picturePost" >
                        <img className="picturePost1" src={val} alt = {"avatar"}/>
                    </div>
                    <div className="dataInputCreate">
                        <label><input className="inputReg" placeholder="url post picture" type="text" name="avatar" value={val} onInput={changeText} /*value="image\9c23fb3fea95ce560ed99eb44ac99041.jpg"*//></label>
                        <label>Название<input className="inputReg" placeholder="Название" type="text" name="name" value={postName} onInput={changeTextName}/></label>
                        <label>Текст<textarea resize="vertical" maxLength="40"  className="inputReg" placeholder="text" type="text" name="text" value={postText}  onInput={changeTextPost}/></label>
                        <button className="btn-registration" onClick={props.handleClose}>Отмена</button>
                        <button className="btn-registration" onClick={handleSave}>Создать</button>
                    </div>
                </div>}
                
                
                {!knownPost && <div className="modalPost">
                    <div className="picturePost" >
                        <img className="picturePost1" src={val} alt = {"avatar"}/>
                    </div>
                    <div className="dataInputCreate">
                        <label><input className="inputReg" placeholder="url post picture" type="text" name="avatar" onInput={changeText} /*value="image\9c23fb3fea95ce560ed99eb44ac99041.jpg"*//></label>
                        <label>Название<input className="inputReg" placeholder="Название" type="text" name="name"  onInput={changeTextName}/></label>
                        <label>Текст<textarea resize="vertical" maxLength="40"  className="inputReg" placeholder="text" type="text" name="text"  onInput={changeTextPost}/></label>
                        <button className="btn-registration" onClick={props.handleClose}>Отмена</button>
                        <button className="btn-registration" onClick={handleSave}>Создать</button>
                    </div>
                </div>}
                
            </div>
        </div>
    )
}
export default CreatePost;
