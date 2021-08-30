import './Profile.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import React from "react";
import Header from '../Header/Header';
import HeaderMini from '../HeaderMini/HeaderMini';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function Profile(props){

    const currentUser = React.useContext(CurrentUserContext);
    const nameRef = React.useRef();
    const emailRef = React.useRef();

    const [emailErrorMessage, setEmailErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [nameErrorMessage, setNameErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState({errorMessage:'', isValid:true});
    const [isValid, setIsValid] = React.useState(true);

    const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const nameRegex = /^[A-Za-zа-яА-ЯёЁ -]+$/i;

    function setFormValid(){
        setIsValid(emailErrorMessage.isValid & nameErrorMessage.isValid)
    }

    React.useEffect(() => {
        setFormValid();
    }, [nameErrorMessage, emailErrorMessage])

    function setEmailErr() {
        setEmailErrorMessage({errorMessage:emailRef.current.validationMessage, isValid:emailRegex.test(emailRef.current.value)})
    }

    function setNameErr() {
        if(nameRef.current.value.length >= 2){
            setNameErrorMessage({errorMessage:nameRef.current.validationMessage, isValid:nameRegex.test(nameRef.current.value)})
        } else {
            setNameErrorMessage({errorMessage:nameRef.current.validationMessage, isValid:nameRef.current.checkValidity()})
        }
    }

    // console.log('currentUser: ' + currentUser.name)

    function handleSubmit(e){
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name: nameRef.current.value,
            email: emailRef.current.value,
        });
    }

    function handleSignOut(){
        props.onExit();
    }

    return(
            <div>
                <InfoToolTip isInfoTooltipOpen={props.isInfoTooltipOpen} onClosePopup={props.onClosePopup}/>
                {props.windowWidth > 768 ? <Header/> : <HeaderMini/>}
                <div className="profile">
                    <h1 className='profile__header'>Привет, {currentUser.name}!</h1>
                    <form className='profile__form'>
                        <div className='profile__form-field'>
                            <div className='profile__form-input'>
                                <div className='profile__form-field-tip'>Имя</div>
                                <input ref={nameRef} onChange={setNameErr} className={nameErrorMessage.isValid ? 'profile__form-field-input' : 'profile__form-field-input form-err__text-color'} defaultValue={currentUser.name} minLength="2" maxLength="30"></input>
                            </div>
                            <span className={nameErrorMessage.isValid ? 'profile__form-err email-err' : 'profile__form-err email-err email-err form-err_active_y'}>{!nameErrorMessage.isValid & nameErrorMessage.errorMessage == '' ? "Поле должно содержать только латиницу, кириллицу, пробел или дефис" : nameErrorMessage.errorMessage}</span>
                        </div>
                        <div className='profile__form-field'>
                            <div className='profile__form-input'>
                                <div className='profile__form-field-tip'>Email</div>
                                <input ref={emailRef} onChange={setEmailErr} ref={emailRef} className={emailErrorMessage.isValid ? 'profile__form-field-input' : 'profile__form-field-input form-err__text-color'} type="email" minLength="2" maxLength="30" defaultValue={currentUser.email}></input>
                            </div>
                            <span className={emailErrorMessage.isValid ? 'profile__form-err email-err' : 'profile__form-err email-err email-err form-err_active_y'}>{!emailErrorMessage.isValid && 'Введите корректный email.'}</span>
                        </div>
                    </form>
                    <div className='profile__buttons'>
                        <button onClick={handleSubmit} className={isValid ? 'profile__btn' : 'profile__btn profile__btn_disabled'} disabled={!isValid && 'disabled'}>Редактировать</button>
                        <button onClick = {handleSignOut} className='profile__btn'>Выйти из аккаунта</button>
                    </div>
                </div>
            </div>

    )
}

export default Profile;