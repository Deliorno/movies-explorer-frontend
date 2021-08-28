import './Login.css';
import { Link } from 'react-router-dom';
import React from "react";

function Login(props){

    const [emailErrorMessage, setEmailErrorMessage] = React.useState({errorMessage:'', isValid:true});
    // const [passwordErrorMessage, setPasswordErrorMessage] = React.useState({errorMessage:'', isValid:true});
    // const [isValid, setIsValid] = React.useState(true);

    const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    // function setFormValid(){
    //     setIsValid(emailErrorMessage.isValid)
    // }

    React.useEffect(() => {
        setEmailErr()
    }, [])

    // React.useEffect(() => {
    //     setFormValid()
    //   }, [emailErrorMessage])

    function setEmailErr() {
        // console.log(emailRegex.test(emailRef.current.value))
        // console.log(!emailRef.current.validationMessage)
        setEmailErrorMessage({errorMessage:emailRef.current.validationMessage, isValid:emailRegex.test(emailRef.current.value)})
    }

    // function setPasswordErr(e) {
    //     setPasswordErrorMessage({errorMessage:e.target.validationMessage, isValid:e.target.checkValidity()})
    // }

    function handleSubmit(e){
        console.log('Yf;fkf')
        e.preventDefault();
        if ((passwordRef.current.value !== '') && (emailRef.current.value !== '')){
           props.onLogin(passwordRef.current.value,emailRef.current.value) 
        }
    };
    console.log(emailErrorMessage.isValid)
    return(
        <div className="login">
            <Link to = "/"><div className='login__logo'></div></Link>
            <h1 className='login__header'>Добро пожаловать!</h1>
            <form className='login__form'>
                <div className='login__form-field'>
                    <label className='login__form-field-tip'>E-mail</label>
                    <input ref={emailRef} className={emailErrorMessage.isValid ? 'register__form-field-input' : 'register__form-field-input form-err__text-color'} required type="email" onChange={setEmailErr}></input>
                    <span className={emailErrorMessage.isValid ? 'form-err email-err' : 'form-err email-err form-err_active_y'}>{!emailErrorMessage.isValid && 'Введите корректный email.'}</span>
                </div>
                <div className='login__form-field'>
                    <label className='login__form-field-tip'>Пароль</label>
                    <input ref={passwordRef} className='login__form-field-input' required type="password"></input>
                    <span className='form-err email-err'>{/* {passwordErrorMessage.errorMessage}*/}</span> 
                </div>
            </form>
            <button type="submit" onClick={handleSubmit} className={emailErrorMessage.isValid ? 'login__btn' : 'login__btn-disabled'} disabled={!emailErrorMessage.isValid && 'disabled'}>Войти</button>
            <div className='login__btn-login'>
                <p className='login__btn-text'>Ещё не зарегистрированы?</p>
                <Link to='/signup'><p className='login__login'>Регистрация</p></Link>
            </div>
        </div>
    )
}

export default Login;