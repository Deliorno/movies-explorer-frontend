import './Login.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";

function Login(props){

    const [emailErrorMessage, setEmailErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [isValid, setIsValid] = React.useState(true);

    const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    function setFormValid(){
        setIsValid(emailErrorMessage.isValid && passwordErrorMessage.isValid)
    }

    React.useEffect(() => {
        setEmailErr()
        console.log(emailRef.current.validationMessage);
    }, [])

    React.useEffect(() => {
        setFormValid()
      }, [emailErrorMessage, passwordErrorMessage])

    function setEmailErr() {
        // console.log(e.target)
        console.log(emailRef.current.value)
        setEmailErrorMessage({errorMessage:emailRef.current.validationMessage, isValid:emailRegex.test(emailRef.current.value)})
        console.log(emailErrorMessage)
    }

    function setPasswordErr(e) {
        setPasswordErrorMessage({errorMessage:e.target.validationMessage, isValid:e.target.checkValidity()})
    }

    return(
        <div className="login">
            <Link to = "/"><div className='login__logo'></div></Link>
            <h1 className='login__header'>Добро пожаловать!</h1>
            <form className='login__form'>
                <div className='login__form-field'>
                    <label className='login__form-field-tip'>E-mail</label>
                    <input ref={emailRef} className='login__form-field-input' required type="email" defaultValue="pochta@yandex.ru" onChange={setEmailErr}></input>
                    <span className={emailErrorMessage.isValid ? 'form-err email-err' : 'form-err email-err form-err_active_y'}>{!emailErrorMessage.isValid && 'Введите корректный email.'}</span>
                </div>
                <div className='login__form-field'>
                    <label className='login__form-field-tip'>Пароль</label>
                    <input ref={passwordRef} className='login__form-field-input' required type="password" onChange={setPasswordErr} defaultValue="kjsfhgklj"></input>
                    <span className={passwordErrorMessage.isValid ? 'form-err email-err' : 'form-err email-err form-err_active_y'}>{passwordErrorMessage.errorMessage}</span>
                </div>
            </form>
            <button type="submit" className={isValid ? 'login__btn' : 'login__btn-disabled'} disabled={isValid && 'disabled'}>Войти</button>
            <div className='login__btn-login'>
                <p className='login__btn-text'>Ещё не зарегистрированы?</p>
                <Link to='/signup'><p className='login__login'>Регистрация</p></Link>
            </div>
        </div>
    )
}

export default Login;