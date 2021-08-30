import React from "react";
import './SavedMoviesCard.css';

function SavedMoviesCard(props){

    function getTimeFromMins() {
        let hours = Math.trunc(props.savedFilm.duration/60);
        let minutes = props.savedFilm.duration % 60;
        if (minutes == 0){
            return hours + 'ч ';
        } else if (hours == 0){
            return minutes + 'м ';
        } else
        return hours + 'ч ' + minutes + 'м';
    };

    function handleDelete(){
        props.onDeleteMovie(props.savedFilm.movieId)
    }

    return(
        <div className="card-list__card">
            <a href={props.savedFilm.trailer}>
                <img className="card-list__card-img" src={props.savedFilm.image} alt="" ></img>
            </a>
            <div className="card-list__card-info">
                <div className="card-list__card-name">{props.savedFilm.nameRU}</div>
                <div onClick={handleDelete} className="card-list__card-delete"></div>
            </div>
            <div className="card-list__card-duration">{getTimeFromMins()}</div>
        </div>
    )
}

export default SavedMoviesCard;