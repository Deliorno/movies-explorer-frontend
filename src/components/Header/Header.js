import './Header.css';
import '../../index.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props){
    return(
        <div className="header header_theme_dark">
            <Link to='/'><img alt="Лого" src={logo} className="header__logo"></img></Link>
            <div className="header__info">
                <div className="header__links">
                <Link to='/movies' rel="noopener noreferrer" target="_blank"><p className="header__text header__text_theme_dark">Фильмы</p></Link>
                <Link to='/saved-movies' rel="noopener noreferrer" target="_blank"><p className="header__text header__text_theme_dark">Сохраенные фильмы</p></Link>
                </div>
                <Link to='/profile' rel="noopener noreferrer" target="_blank"><button type="button" className="header__btn header__btn_theme_dark">Аккаунт</button></Link>
            </div>
        </div>
        
    )
}

export default Header;