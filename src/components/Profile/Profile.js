import './Profile.css'

function Profile(props){
    return(
            <div className="profile">
                <h1 className='profile__header'>Привет, Марина!</h1>
                <form className='profile__form'>
                    <div className='profile__form-field'>
                        <div className='profile__form-field-tip'>Имя</div>
                        <input className='profile__form-field-input' defaultValue='Марина'></input>
                    </div>
                    <div className='profile__form-field'>
                        <div className='profile__form-field-tip'>Email</div>
                        <input className='profile__form-field-input' defaultValue='deos.y@yandex.ru'></input>
                    </div>
                </form>
                <div className='profile__buttons'>
                    <button className='profile__btn'>Редактировать</button>
                    <button className='profile__btn'>Выйти из аккаунта</button>
                </div>
            </div>

    )
}

export default Profile;