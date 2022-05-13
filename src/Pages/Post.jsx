import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";

const Post = (props) => {
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
        height: "100px",
         width: "100px",
        // object: "contain"
    };
    function getPostDelete(){
        console.log(api.deletePost(post.Id));
        alert("пост удён")
    }
    


    return ( 
            <div className ="postList">
            
                <img  className="card__img1" src={post.picture}/>
                <div onClick = {getPostDelete}>Удалить</div>
                <div className="subTitle">
                        
                        <div className="author__img1" ><img src={post.authorImg} style = {image_style}/></div>
                        <div className="author__post1">{post.author}</div>
                        <div className="author__post2">{post.name || "Post"}</div>
                        <div  className="author__post2">{post.cardText}</div>
                </div>
                <div className="coment">
                    {post.commends?.map(el => (el.map( x => <div> <p> {x.author} </p><p> {x.data} </p><p> {x.commend} </p>  </div> ) ))}           
                </div>                
             </div>      
    )
}

export default Post