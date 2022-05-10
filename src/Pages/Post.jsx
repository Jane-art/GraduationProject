import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";

const Post = () => {
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
        height: "100%",
         width: "100%",
        // object: "contain"
    };
    let image_st ={
        height: "100%",
        width: "100%",
        // object: "contain"
    };


    return ( 
        <div className="postList">
            {/* <button type="button" className="btn-primary" >
                        <span>Назад</span>
            </button> */}
           <div className="card__img"><img src={post.picture} style = {image_st}/></div>
                <div className="subTitle">
            
                    <div className="author__img" ><img src={post.authorImg} style = {image_style}/></div>
                    <div>{post.author}</div>
                    <h1>{post.name || "Post"}</h1>
                    <div>{post.cardText}</div>
                    <div>
                        {post.commends?.map(el => (el.map( x => <div> <p> {x.author} </p><p> {x.data} </p><p> {x.commend} </p>  </div> ) ))}           
                    </div>
                </div>
        </div>
    )
}

export default Post