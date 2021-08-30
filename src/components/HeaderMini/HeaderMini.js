import './HeaderMini.css';
import '../../index.css';
import logo from '../../images/logo.svg';
import React from "react";
import { Link } from 'react-router-dom';

function HeaderMini(props){
    const [menuVisible, isMenuVisible] = React.useState(false);

    // console.log(menuVisible)

    function handleMenu(){
        isMenuVisible(!menuVisible);
    }

    return(
        <div className="header header_theme_dark">
            <Link to='/'><img alt="Лого" src={logo} className="header__logo"></img></Link>
            <button onClick ={handleMenu} type="button" className="header-mini__options"></button>
            <div className={!menuVisible ? "header-mini__menu header-mini__menu_visible_no" : "header-mini__menu"}>
                <div className="header-mini__info">
                    <button onClick ={handleMenu} type="button" className="header-mini__btn-close"></button>
                    <div className="header-mini__links">
                        <Link to='/'><p className={window.location.pathname == '/' ? "header-mini__text header-mini__text_active_yes" : 'header-mini__text'}>Главная</p></Link>
                        <Link to='/movies'><p className={window.location.pathname == '/movies' ? "header-mini__text header-mini__text_active_yes" : 'header-mini__text'}>Фильмы</p></Link>
                        <Link to='/saved-movies'><p className={window.location.pathname == '/saved-movies' ? "header-mini__text header-mini__text_active_yes" : 'header-mini__text'}>Сохраенные фильмы</p></Link>
                    </div>
                    <Link to='/profile'><button type="button" className="header-mini__btn header__btn_theme_dark">Аккаунт</button></Link>
                </div>    
            </div>
            <div className={!menuVisible ? "header-mini__layout header-mini__layout_visible_no" : "header-mini__layout"}></div>
        </div> 
    )
}

export default HeaderMini;