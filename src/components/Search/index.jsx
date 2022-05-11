import React, {useState} from "react";
import "./index.css";
import close from "./img/close.svg";
import magnifier from "./img/magnifier.svg";


const Search = (props) => {
    const [val,updateVal] = useState(props.text); //хук сoстояния //onInput, onChange, onBlur, onFocus
    const changeText =(e) => {
        updateVal(e.target.value); //вызвать функцию updateVal и передать в неё новое значение переменной val
        props.foo(e.target.value);
    }
    const clearText = function() {
        updateVal("");
        props.foo("");
    } //очистка формы запроса
    return (
        <form>
            <input type="text" value={val} onInput={changeText} placeholder ="поиск"/>
            <button type="button" className="search-btn">
                {val ? <img src={close} onClick={clearText}/> : <img src={magnifier}/>} 
            </button> 
        </form>  //смена картинки от состояния строки
    )
}
export default Search;
