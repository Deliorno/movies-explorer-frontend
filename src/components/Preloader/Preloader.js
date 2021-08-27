import './Preloader.css'

function Preloader(props){
    // console.log(props.films)
    // console.log(props.isToShow.length)
    // console.log(props.isToShow.length == 0)
    return(
        <div className="preloader">
            <div className="preloader__text">{props.films !== undefined ? 'Ничего не найдено' : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'}</div>
        </div>
        
    )
}

export default Preloader;