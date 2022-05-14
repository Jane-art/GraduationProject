import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import CreatePost from "./CreatePost";

const Post = ({currentAuthor, element}) => {
    const [name, setName] = useState("Post");
    let {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        //api.getPostProduct();
        api.getPostProduct(id).then(data => {
            //console.log(data);
            setPost(data);
        })
    }, []);
    
    let image_style ={
        minWidth: "32px",
        maxWidth: "70px",
        marginRight: "0"
        // object: "contain"
    };

    let card_st ={
        minWidth: "200px",
        maxWidth: "500px",
        marginTop: "5px",
        marginLeft: "5px",
    };
   

    function getPostDelete(){
        api.deletePost(id);
    }

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


    return ( 
           


            <div className ="postList">
                {isOpen && <CreatePost
                    currentPost = {post}
                    currentAuthor = {currentAuthor}
                    handleClose={togglePopup}
                    handleSave = {togglePopupAndSaveData}
                />}

                 <a href="http://localhost:8080/"><button className="delete"><img src="https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/close-window.svg" width={30} height={30}/></button></a> 
                <div className="function_button" >
                    <button className="delete"  onClick={togglePopup} ><img src="https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/edit-pen.svg" width={30} height={30} alt="Изменить"/></button>
                    <button className="delete" onClick = {getPostDelete}><img src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/delete.svg"width={30} height={30}/></button></div>
                <div className="subTitle">
                    <div className="body_post">
                         <div className="card__img1">
                            <img style = {card_st} src={post.picture}/>
                        </div>
                        <div className="author__img1" ><img src={post.authorImg} style = {image_style}/>
                            <div className="author__post1">{post.author}</div>
                            {/* <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21c.211 0 .514-.137.735-.265C18.405 17.205 22 13.098 22 8.922 22 5.45 19.553 3 16.29 3c-1.863 0-3.374.863-4.29 2.186C11.104 3.873 9.573 3 7.71 3 4.447 3 2 5.451 2 8.922c0 4.176 3.595 8.284 9.275 11.813.211.128.514.265.725.265Zm0-1.657c-.04 0-.11-.049-.201-.117C7.579 16.5 3.62 12.569 3.62 8.921c0-2.608 1.732-4.344 4.069-4.344 1.893 0 2.98 1.147 3.625 2.128.272.392.443.5.685.5.242 0 .393-.118.685-.5.695-.96 1.742-2.128 3.625-2.128 2.337 0 4.069 1.736 4.069 4.344 0 3.647-3.958 7.578-8.168 10.303-.1.07-.17.118-.211.118Z" fill="#7B8E98">
                            </path>
                            <path clip-rule="evenodd" d="M12 19.343c-.04 0-.11-.049-.201-.117C7.579 16.5 3.62 12.569 3.62 8.921c0-2.608 1.732-4.344 4.069-4.344 1.893 0 2.98 1.148 3.625 2.128.272.392.443.5.685.5.242 0 .393-.118.685-.5.695-.96 1.742-2.128 3.625-2.128 2.337 0 4.069 1.736 4.069 4.344 0 3.647-3.958 7.578-8.168 10.303-.1.07-.17.118-.211.118Z">
                            </path>
                            </svg> */}
                            <div className="author__post2">{post.name || "Post"}</div>
                            <div  className="author__post3">{post.cardText}</div>
                        </div>
                    </div>
                </div>
                <div className="title">
                   
                    <div className="coment">
                        {post.commends?.map(el => (el.map( x => <div> <p> {x.author} </p><p> {x.data} </p><p> {x.commend} </p>  </div> ) ))}           
                    </div>    
                </div>
            </div>      
    )
}

export default Post