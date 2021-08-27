import React, {useEffect} from "react";
import './MoviesCard.css'

function MoviesCard(props){

    const [isLikeActive, setIsLikeActive] = React.useState(false);
    // const [filteredMovies, setFilteredMovies] = React.useState([]);

    function handleLike(){
        if (!isLikeActive){
            props.onCreateMovie(props.film);
        } else {
            props.onDeleteMovie(props.film.id);
        }
        setIsLikeActive(!isLikeActive)
    }

    useEffect(() => {

        // if (props.film.nameRU.includes(props.filmForSearch) || props.film.nameRU.includes(props.filmForSearch)){
        //     setIsLikeActive(true)
        // }

        props.savedMovies.forEach((savedMovie)=>{
            if (savedMovie.movieId == props.film.id){
                setIsLikeActive(true)
            }
        })
      }, []);
    
    function getTimeFromMins() {
        let hours = Math.trunc(props.film.duration/60);
        let minutes = props.film.duration % 60;
        if (minutes == 0){
            return hours + 'ч ';
        } else if (hours == 0){
            return minutes + 'м ';
        } else
        return hours + 'ч ' + minutes + 'м';
    };

    return(
            <div className="card-list__card">
                <a href={props.film.trailerLink}>
                    <img className="card-list__card-img" src={"https://api.nomoreparties.co" + props.film.image.url} alt="" ></img>
                </a>
                
                <div className="card-list__card-info">
                    <div className="card-list__card-name">{props.film.nameRU}</div>
                    <div onClick={handleLike} className={isLikeActive ? "card-list__card-like" : "card-list__card-like card-list__card-like_active_no"}></div>
                </div>
                <div className="card-list__card-duration">{getTimeFromMins()}</div>
            </div>
    )
}

export default MoviesCard;