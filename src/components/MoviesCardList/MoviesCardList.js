import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, {useEffect} from "react";
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props){

    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [filmsNotFound, setFilmNotFound] = React.useState(false);
    const [allFilteredMovies, setAllfilteredMovies] = React.useState([]);
    const [notAlMovies, setNotAllMovies] = React.useState(12);
    const [step, setStep] = React.useState(3);

    useEffect(() => {
        if (props.isShortMovies){
            const filterMovies = props.films.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()) & movie.duration <= 40);
            console.log(filterMovies)
            setFilteredMovies(filterMovies);
            // localStorage.setItem('saveSearch', filterMovies);
        } else if (props.filmForSearch.length){
            const filterMovies = props.films.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()));
            const allmov = filterMovies.map((mov) => {
                return mov
            });
            console.log(allmov);
            localStorage.setItem('saveSearch', JSON.stringify(filterMovies));
            setAllfilteredMovies(allmov);
            setFilmNotFound(false);
            devideMovies(filterMovies)
            setFilteredMovies(filterMovies);
        } else if (filteredMovies.length > 0){
            devideMovies(JSON.parse(localStorage.getItem('saveSearch')))
        }
      }, [props.filmForSearch, props.isShortMovies, props.films, notAlMovies]);

      function setAmountOfMovies(){
        if(window.innerWidth > 768){
            setNotAllMovies(12);
            setStep(3);
          } else if((window.innerWidth <= 768) & (window.innerWidth > 480)){
            setNotAllMovies(8);
            setStep(2);
          } else if(window.innerWidth <= 480)
            {
            setNotAllMovies(5);
            setStep(2);
            }
      }
      
      useEffect(() => {
        setAmountOfMovies();
        console.log('saveSearch: ' + JSON.parse(localStorage.getItem('saveSearch')))
        if (JSON.parse(localStorage.getItem('saveSearch')) != null){
            setAllfilteredMovies(JSON.parse(localStorage.getItem('saveSearch')));
            devideMovies(JSON.parse(localStorage.getItem('saveSearch')));
        }
      }, []);

      useEffect(() => {
        if ((props.filmForSearch.length == 0) || (filteredMovies.length == 0)){
            setFilmNotFound(true);
        } else {
            setFilmNotFound(false);
        }
      }, [filteredMovies]);

      useEffect(() => {
        setAmountOfMovies();
      }, [props.filmForSearch, window.innerWidth]);

    function devideMovies(movies){
        movies.splice((notAlMovies), (movies.length-notAlMovies));
        setFilteredMovies(movies);
        console.log(movies);
    }

    function moreFIlms(){
        console.log(step)
        setNotAllMovies((notAlMovies + step))
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
            {(filteredMovies.length > 0) & (notAlMovies < allFilteredMovies.length) ? 
            <div className="more-movies">
                <button type="button" onClick={moreFIlms} className="more-movies-btn">Еще</button>
            </div> : ''}
        </div>
    )
}

export default MoviesCardList;