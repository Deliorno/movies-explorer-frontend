import './SearchForm.css';
import searchIicon from '../../images/search-icon.svg';
import searchBtn from '../../images/search-button.svg';
import React from "react";

function SearchForm(props){
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
            <div className="serach-form__content">
                <div className="serach-form__area">
                    <div className="serach-form__search">
                        <img src={searchIicon} alt='' className='serach-form__img'></img>
                        <input ref={filmNameRef} className="serach-form__input" placeholder='Фильм'></input>
                    </div>
                    <div className="serach-form__actions">
                        <img src={searchBtn} alt='' onClick={window.location.pathname == "/saved-movies" ? searchSavedMovies : search} className='serach-form__btn'></img>
                        <input onClick={props.onCheckbox} type="checkbox" id="toggle-button" className="serach-form__toggle-btn"></input>
                        <div className={props.isBtnActive ? "serach-form__text" : "serach-form__text serach-form__text_active_no"}>Короткометражки</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchForm;