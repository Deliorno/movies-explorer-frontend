import './SearchFormMini.css';
import searchBtn from '../../images/search-button.svg';
import React from "react";

function SearchFormMini(props){

    // const [isBtnActive, setIsBtnActive] = React.useState(false);
    const filmNameRef = React.useRef();

    // function handleShortFilms(){
    //     setIsBtnActive(!isBtnActive)
    // }
    function searchSavedMovies(){
        props.onSearch(filmNameRef.current.value);
        props.onSearchSavedMovies();
    }

    function search(){
        props.onSearch(filmNameRef.current.value);
    }

    return(
        <div className="serach-form">
            <div className="serach-form-mini__content">
                <div className="serach-form__area">
                    <div className="serach-form__search">
                        <input ref={filmNameRef} className="serach-form__input" placeholder='Фильм'></input>
                        <img src={searchBtn} onClick={window.location.pathname == "/saved-movies" ? searchSavedMovies : search} alt='' className='serach-form-mini__btn'></img>
                    </div>
                </div>
                <div className="serach-form__actions-mini">
                        <input onClick={props.onCheckbox} type="checkbox" id="toggle-button" className="serach-form__toggle-btn"></input>
                        <div className={props.isBtnActive ? "serach-form__text" : "serach-form__text serach-form__text_active_no"}>Короткометражки</div>
                </div>
            </div>
        </div>
    )
}

export default SearchFormMini;