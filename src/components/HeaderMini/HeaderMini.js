import './HeaderMini.css';
import '../../index.css';
import logo from '../../images/logo.svg';
import React from "react";

function HeaderMini(props){
    const [menuVisible, isMenuVisible] = React.useState(false);

    console.log(menuVisible)

    function handleMenu(){
        isMenuVisible(!menuVisible);
    }

    return(
        <div className="header header_theme_dark">
            <img alt="Лого" src={logo} className="header__logo"></img>
            <button onClick ={handleMenu} type="button" className="header-mini__options"></button>
            <div className={!menuVisible ? "header-mini__menu header-mini__menu_visible_no" : "header-mini__menu"}>
                <div className="header-mini__info">
                    <button onClick ={handleMenu} type="button" className="header-mini__btn-close"></button>
                    <div className="header-mini__links">
                        <p className="header-mini__text">Главная</p>
                        <p className="header-mini__text header-mini__text_active_yes">Фильмы</p>
                        <p className="header-mini__text">Сохраенные фильмы</p>
                    </div>
                    <button type="button" className="header-mini__btn header__btn_theme_dark">Аккаунт</button>
                </div>    
            </div>
            <div className={!menuVisible ? "header-mini__layout header-mini__layout_visible_no" : "header-mini__layout"}></div>
        </div> 
    )
}

export default HeaderMini;