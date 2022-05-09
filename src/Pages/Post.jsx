import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";

const Post = () => {
    const [name, setName] = useState("Post");
    let {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        api.getPostProduct();
        /*api.getSinglePost(id).then(data => {
            console.log(data);
            setPost(data);
        })*/
    }, []);
    return ( 
        <>
        <h1>{post.name || "Post"}</h1>
        <p>{id}</p>
        </>
    )
}

export default Post