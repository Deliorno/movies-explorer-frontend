import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, {useEffect} from "react";
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props){

    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [filmsNotFound, setFilmNotFound] = React.useState(false);
    const [allFilteredMovies, setAllfilteredMovies] = React.useState([]);
    const [notAlMovies, setNotAllMovies] = React.useState(3);

    useEffect(() => {
        // console.log((!props.filmForSearch.length) || (!filteredMovies.length))
        // console.log(!filteredMovies.length)
        // console.log(!props.filmForSearch.length)
        console.log(props.films)
        if (props.isShortMovies){
            const filterMovies = props.films.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()) & movie.duration <= 40);
            console.log(filterMovies)
            setFilteredMovies(filterMovies);
        } else if (props.filmForSearch.length){
            const filterMovies = props.films.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()));
            const allmov = filterMovies.map((mov) => {
                return mov
             });
            console.log(allmov);
            setAllfilteredMovies(allmov);
            setFilmNotFound(false);
            devideMovies(filterMovies)
            setFilteredMovies(filterMovies);
        } 
      }, [props.filmForSearch, props.isShortMovies, props.films, notAlMovies]);

      useEffect(() => {
        if ((props.filmForSearch.length == 0) || (filteredMovies.length == 0)){
            setFilmNotFound(true);
        } else {
            setFilmNotFound(false);
        }
      }, [filteredMovies]);

      useEffect(() => {
        setNotAllMovies(3);
      }, [props.filmForSearch]);

    function devideMovies(movies){
        movies.splice((notAlMovies), (movies.length-notAlMovies));
        // setFilteredMovies(movies);
        console.log(movies);
    }

    function moreFIlms(){
        setNotAllMovies((notAlMovies + 3))
    }

    return(
        <div>
            {(filmsNotFound) & (props.filmForSearch.length > 0) ? <Preloader isToShow = {props.filmForSearch} films = {props.films} /> : ''}
            <div className="card-list">
            {filteredMovies.map((film)=>{
                return(
                    <MoviesCard filmForSearch = {props.filmForSearch} savedMovies = {props.savedMovies} onDeleteMovie = {props.onDeleteMovie} onCreateMovie = {props.onCreateMovie} film={film} key={film.id}/>
                )
            })}
            </div>
            {(filteredMovies.length > 0) & (notAlMovies <= allFilteredMovies.length) ? 
            <div className="more-movies">
                <button type="button" onClick={moreFIlms} className="more-movies-btn">Еще</button>
            </div> : ''}
        </div>
    )
}

export default MoviesCardList;