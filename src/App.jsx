import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


const App = () => {
    const [searchText, changeText] = useState("");
   
    return (
        <div className="container">
            <Header searchText ={searchText} changeText={changeText}/> 
            <Main search={searchText}/>
            <Footer />
        </div> // подключаем страницы
    )
}

export default App;