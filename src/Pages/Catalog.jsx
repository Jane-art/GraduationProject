import react from "react";
import React, {useState, useEffect} from "react";
import api from '../Api';
import Card from "../components/Card";
import data from "../data.json";
import {Link} from "react-router-dom"

const Catalog =({searchText}) => {
    //  const cards = data.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())); //фильтр поиска
        const [cards, updateCards] = useState([]);
        const [posts, updatePosts] = useState(cards);
        useEffect(() => {
            if (!cards.length) {
                //console.log("try to render card : " + cards.length);
                
                /*let value = api.getPostList();;
                //console.log(api.getPostList());

                value.then( x => {
                    console.log("ff");
                    }
                );*/
                //updateCards(api.getPostList());



            api.getPostList().then(data => {
                //console.log(data);
                
                updateCards(data);
                updatePosts(data);
            });
        }
        if (cards) {
            updatePosts(cards.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
        }
    }, []);
        
    return (
        <>
            {searchText && <div className="search__item">По запросу <strong> {searchText}</strong> найдено {cards.length}</div>}
            <div className="cards-container">
                {posts.map(el => (<Link to={"/post/" + el.id} key={el.id}>
                                            <Card text={el.name} key={el.id} 
                                            pic={el.picture} price={el.cardText} author={el.author} 
                                            author__img={el.authorImg} rating={el.rating} 
                                            commends = {el.commends} />
                                    </Link>))}
            </div>
        </>
    )
}


export default Catalog;