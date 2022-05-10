import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";


const Login =() => {
    const [post, setPost] = useState({});

    useEffect(() => {
        //console.log(api.getAuthorById(0));
        //api.getPostProduct();
        api.getAuthorById(0).then(data => {
            console.log(data);
            setPost(data);
        })
    }, []);

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




    return (
        
         <form tabIndex="-1" className="modal-wrap" role="dialog" aria-labelledby="rcDialogTitle0">
                            {/* <div tabIndex="-1" className="modal-wrap" role="dialog" aria-labelledby="rcDialogTitle0"> */}
                             
                            
                            <button type="button" aria-label="Close" className="modal-close">
                                <span className="modal-close-x">
                                    <span role="img" aria-label="close" className="anticon anticon-close ant-modal-close-icon">
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                                            </svg>
                                    </span>
                                </span>
                            </button>
                            
                            <div className="modal-header">
                                <div className="modal-title" id="rcDialogTitle0">Профиль</div>
                            </div>
                            <div>
                                <input placeholder="url avatar-a" className="ant-input mb-1" type="text" name="avatar" /*value="image\9c23fb3fea95ce560ed99eb44ac99041.jpg"*//>
                                {/* <div className="author__img" ><img src={Post.authorImg}/></div> */}
                            </div>
                            <label>Login<input placeholder="ФИО" className="ant-input mb-2" type="text" name="name" value={post.name}/></label>
                            <label>e-mail<input placeholder="Email" className="ant-input ant-input-disabled mb-2" type="text" name="email" /*value="maxim_91@inbox.ru"*//></label>
                            <label>about<input placeholder="about" className="ant-input mb-2" type="text" name="about" /*value="student"*//></label>
                            
                            <div className="modal-footer">
                                    <button type="button" className=".btn-primary">
                                                <span>Отмена</span>
                                    </button>
                                    <button type="button" className="ant-btn ant-btn-primary">
                                                <span>Создать</span>
                                    </button>
                            </div>
                            <div tabIndex="0" aria-hidden="true" style={document_hidden}></div>
                       
                        </form>
    
    )
}

export default Login;