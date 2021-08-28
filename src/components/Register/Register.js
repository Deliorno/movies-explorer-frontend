import './Register.css';
import { Link } from 'react-router-dom';
import React from "react";

function Register(props){

    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const nameRef = React.useRef();
    const [emailErrorMessage, setEmailErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [nameErrorMessage, setNameErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [isValid, setIsValid] = React.useState(true);

    const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const nameRegex = /^[a-zа-яё\-\ ][a-zа-яё\-\ ]/i;

    function setFormValid(){
        setIsValid(emailErrorMessage.isValid & nameErrorMessage.isValid)
    }

    React.useEffect(() => {
        setNameErr()
        setEmailErr()
    }, [])

    React.useEffect(() => {
        setFormValid()
      }, [nameErrorMessage, emailErrorMessage, passwordErrorMessage])

    function setEmailErr() {
        // console.log(emailRef.current.value)
        setEmailErrorMessage({errorMessage:emailRef.current.validationMessage, isValid:emailRegex.test(emailRef.current.value)})
    }

    function setNameErr() {
        // console.log("NAME:" + nameRef.current.value)
        setNameErrorMessage({errorMessage:nameRef.current.validationMessage, isValid:nameRegex.test(nameRef.current.value)})
        console.log(nameErrorMessage)
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if ((passwordRef.current.value !== '') && (emailRef.current.value !== '') && (nameRef.current.value !== '')){
           props.onRegister(passwordRef.current.value,emailRef.current.value,nameRef.current.value) 
        }
    };

    return(
            <div className="register">
                <Link to = "/"><div className='register__logo'></div></Link>
                <h1 className='register__header'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <div className='register__form-field'>
                        <label className='register__form-field-tip'>Имя</label>
                        <input onChange={setNameErr} ref={nameRef} className={nameErrorMessage.isValid ? 'register__form-field-input' : 'register__form-field-input form-err__text-color'} minLength="2" maxLength="30"></input>
                        <span className={nameErrorMessage.isValid ? 'form-err email-err' : 'form-err email-err form-err_active_y'}>{!nameErrorMessage.isValid & nameErrorMessage.errorMessage == '' ? "Поле должно содержать только латиницу, кириллицу, пробел или дефис" : nameErrorMessage.errorMessage}</span>
                    </div>
                    <div className='register__form-field'>
                        <label className='register__form-field-tip'>E-mail</label>
                        <input onChange={setEmailErr} ref={emailRef} className={emailErrorMessage.isValid ? 'register__form-field-input' : 'register__form-field-input form-err__text-color'} type="email" minLength="2" maxLength="30"></input>
                        <span className={emailErrorMessage.isValid ? 'form-err email-err' : 'form-err email-err form-err_active_y'}>{emailErrorMessage.isValid && 'Введите корректный email.'}</span>
                    </div>
                    <div className='register__form-field'>
                        <label className='register__form-field-tip'>Пароль</label>
                        <input ref={passwordRef} type='password' className='register__form-field-input'></input>
                        <span className='form-err password-err'></span>
                    </div>
                </form>
                <button type="submit" onClick={handleSubmit} className={isValid ? 'register__btn' : 'register__btn register__btn_disabled'} disabled={!isValid && 'disabled'}>Зарегистрироваться</button>
                <div className='register__btn-login'>
                    <p className='register__btn-text'>Уже зарегистрированы?</p>
                    <Link to='/signin'><p className='register__login'>Войти</p></Link>
                </div>
            </div>

    )
}

export default Register;