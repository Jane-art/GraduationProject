import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";


const CreatePost = props  => {
    return (
        <div className='popup'>
            <div className='popup_inner_createPost'>
                <div className="modalH1">
                    <h1>Создать пост</h1>
                </div>
                <div className="modal-header">
                    <div className="urlAndImg">  
                        <div>
                            <input placeholder="url post picture" type="text" name="avatar"  /*value="image\9c23fb3fea95ce560ed99eb44ac99041.jpg"*//>
                        </div>
                        <div>
                            <img src="https://avatanplus.com/files/resources/mid/58b9b6ed3db6115a95728ec5.png" alt = {"avatar"}  width={250} height={250}/>
                        </div>
                    </div> 
                    <div className="dataInput">
                        <label>Название<input className="inputReg" placeholder="Название" type="text" name="name"  /></label>
                        <label>Текст<input className="inputReg" placeholder="text" type="text" name="text"  /></label>
                    </div>
                </div>
                <div className="regButtons">
                    <button className="btn-registration" onClick={props.handleClose}>Отмена</button>
                    <button className="btn-registration">Сохранить</button>
                </div>
            </div>
        </div>
    )
}
export default CreatePost;
