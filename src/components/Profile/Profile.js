import './Profile.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import React from "react";
import Header from '../Header/Header';
import HeaderMini from '../HeaderMini/HeaderMini';

function Profile(props){

    const nameRef = React.useRef();
    const emailRef = React.useRef();

    const currentUser = React.useContext(CurrentUserContext);
    console.log('currentUser: ' + currentUser.name)

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
                {props.windowWidth > 768 ? <Header/> : <HeaderMini/>}
                <div className="profile">
                    <h1 className='profile__header'>Привет, {currentUser.name}!</h1>
                    <form className='profile__form'>
                        <div className='profile__form-field'>
                            <div className='profile__form-field-tip'>Имя</div>
                            <input ref={nameRef} className='profile__form-field-input' defaultValue={currentUser.name}></input>
                        </div>
                        <div className='profile__form-field'>
                            <div className='profile__form-field-tip'>Email</div>
                            <input ref={emailRef} className='profile__form-field-input' defaultValue={currentUser.email}></input>
                        </div>
                    </form>
                    <div className='profile__buttons'>
                        <button onClick={handleSubmit} className='profile__btn'>Редактировать</button>
                        <button onClick = {handleSignOut} className='profile__btn'>Выйти из аккаунта</button>
                    </div>
                </div>
            </div>

    )
}

export default Profile;