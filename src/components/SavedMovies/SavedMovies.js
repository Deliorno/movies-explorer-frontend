import React from "react";
import './SavedMovies.css'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard'

function SavedMovies(props){

    return(
        <div className="movies">
            <SavedMoviesCard/>
            <div className="saved-devider"></div>
        </div>
    )
}

export default SavedMovies;