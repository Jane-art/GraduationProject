import react from "react";
import React, {useState, useEffect} from "react";
import api from '../Api';
import Card from "../components/Card";
import data from "../data.json";
import {Link} from "react-router-dom"
import pagiL from "../components/Search/img/pageL.png"

const Catalog =({searchText}) => {
    
        /*
        function paginate(array, pageIndex, pageSize) {
            const first = pageIndex * pageSize
            const last = (pageIndex * pageSize) + pageSize
            return array.filter((_, index) => {
                return first <= index && index < last
            })
        }*/
                
        const [cards, updateCards] = useState([]);
        const [posts, updatePosts] = useState(cards);

        let [maxLength, updateMaxLength]  =useState(0);

        let [page, updatePage] = useState(0);
        let [pageSize, updatepageSize] = useState(6);
        let [first, updateFirst] = useState(0);
        let [last, updateLast] = useState(pageSize);
      

        let cardsSearch = posts.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())); //фильтр поиска
        useEffect(() => {
            if (!posts.length) {
                //console.log("try to render card : " + cards.length);
                
                /*let value = api.getPostList();;
                //console.log(api.getPostList());

                value.then( x => {
                    console.log("ff");
                    }
                );*/
                //updateCards(api.getPostList());



            api.getPostList().then(data => {
                console.log(data);
                //data = paginate(data, page, 3)
                updateMaxLength(data.length / pageSize);
                
                updateCards(data);
                updatePosts(data);
            });
        }
        if (posts) {

            updatePosts(posts.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
        }
    }, []);

    useEffect(() => {
        //updatePage(page++);
        //console.log(page);

        //data = paginate(data, page, 3)
                
        updateFirst(page * pageSize);
        updateLast((page * pageSize) + pageSize);
    },[page]);

    //cardsSearch = paginate(cardsSearch, 3);

    
    function inc(){
        if ((page+1) < maxLength){
            page ++; 
            updatePage(page);
        }
    }

    function dec(){
        if (page > 0){
            page --; 
            updatePage(page);
        }
    }

    // const pagiL = {
    //     backgroundImage: `url(${paginateL})`,
    //   }
        
    return (
        <>
            {searchText && <div className="search__item">По запросу <strong> {searchText}</strong> найдено {cardsSearch.length}</div>}
            <div className="cards-container">
                {cardsSearch.filter((_, index) => {
                return first <= index && index < last
                }).map(el => (<Link to={"/post/" + el.id} key={el.id}>
                                            <Card text={el.name} key={el.id} 
                                            pic={el.picture} price={el.cardText} author={el.author} 
                                            author__img={el.authorImg} /*rating={el.rating}*/ 
                                            /*commends = {el.commends}*/ />
                                    </Link>))}


            </div>

            <div className="buttonPostGroup">
                    <a className="buttonPost" onClick={dec}><img alt = "toBi" src={pagiL}  width={250} height={115} /></a>
                    <div> <h1>{page+1} </h1></div>
                    <a className="buttonPost"  onClick={inc}><img alt = "toBi" src="https://www.pngmagic.com/product_images/to-be-continued-arrow-png.png" width={250} height={170}/></a>
                </div>
            


        </>
    )
}


export default Catalog;