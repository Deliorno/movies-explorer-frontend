import './SearchFormMini.css';
import searchIicon from '../../images/search-icon.svg';
import searchBtn from '../../images/search-button.svg';
import React from "react";

function SearchFormMini(props){
    const [isBtnActive, setIsBtnActive] = React.useState(true);

    function handleShortFilms(){
        setIsBtnActive(!isBtnActive)
    }

    return(
        <div className="serach-form">
            <div className="serach-form-mini__content">
                <div className="serach-form__area">
                    <div className="serach-form__search">
                        <input className="serach-form__input" placeholder='Фильм'></input>
                        <img src={searchBtn} alt='' className='serach-form-mini__btn'></img>
                    </div>
                </div>
                <div className="serach-form__actions-mini">
                        <input onClick={handleShortFilms} type="checkbox" id="toggle-button" className="serach-form__toggle-btn"></input>
                        <div className={isBtnActive ? "serach-form__text" : "serach-form__text serach-form__text_active_no"}>Короткометражки</div>
                </div>
            </div>
        </div>
    )
}

export default SearchFormMini;