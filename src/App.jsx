import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


const App = () => {
    const [searchText, changeText] = useState("");

    const [currentAuthor, setCurrentAuthor] = useState();
   
    return (
        <div className="container">
            <Header 
                searchText ={searchText} 
                changeTextLookUp={changeText}

                currentAuthor = {currentAuthor}
                setCurrentAuthor = {setCurrentAuthor}
            /> 
            <Main search={searchText}

                currentAuthor = {currentAuthor}
                setCurrentAuthor = {setCurrentAuthor}
            />
            <Footer />
        </div> // подключаем страницы
    )
}

export default App;