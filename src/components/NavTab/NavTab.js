import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './NavTab.css'

function NavTab(props){
    return(
        <div className="main">
            <div className="header">
                <div className="header__content">
                <Link to='/'><img alt="Лого" src={logo} className="header__logo"></img></Link>
                    <div className="header__info">
                        <div className="header__links">
                        <Link to='/signup'><p className="header__text">Регистрация</p></Link>
                        </div>
                        <Link to='/signin'><button className="header__btn" type="button">Войти</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTab;