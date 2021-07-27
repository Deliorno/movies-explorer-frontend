import './Register.css';
import { Link } from 'react-router-dom';

function Register(props){
    return(
            <div className="register">
                <Link to = "/"><div className='register__logo'></div></Link>
                <h1 className='register__header'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <div className='register__form-field'>
                        <label className='register__form-field-tip'>Имя</label>
                        <input className='register__form-field-input' minLength="2" maxLength="30" defaultValue='Марина'></input>
                        <span className='form-err name-err'>Что-то пошло не так...</span>
                    </div>
                    <div className='register__form-field'>
                        <label className='register__form-field-tip'>E-mail</label>
                        <input className='register__form-field-input' type="email" minLength="2" maxLength="30" defaultValue='pochta@yandex.ru'></input>
                        <span className='form-err email-err'>Что-то пошло не так...</span>
                    </div>
                    <div className='register__form-field'>
                        <label className='register__form-field-tip'>Пароль</label>
                        <input type='password' className='register__form-field-input form-err__text-color' defaultValue='Марина'></input>
                        <span className='form-err form-err_active_y password-err'>Что-то пошло не так...</span>
                    </div>
                </form>
                <button className='register__btn'>Зарегистрироваться</button>
                <div className='register__btn-login'>
                    <p className='register__btn-text'>Уже зарегистрированы?</p>
                    <Link to='/signin'><p className='register__login'>Войти</p></Link>
                </div>
            </div>

    )
}

export default Register;