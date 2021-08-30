import React, { useEffect }from "react";
import './SavedMovies.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';
import Header from '../Header/Header';
import HeaderMini from '../HeaderMini/HeaderMini';
import SearchForm from '../SearchForm/SearchForm';
import SearchFormMini from '../SearchFormMini/SearchFormMini';

function SavedMovies(props){

    const [filteredMovies, setFilteredMovies] = React.useState([]);

    useEffect(() => {
        if (props.filmForSearch == 0){
            setFilteredMovies(props.savedMovies); 
        }
        if(props.isShortMovies){
            if(props.filmForSearch.length > 0){
                console.log(props.isShortMovies)
                const filterMoviesDuration = props.savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()) & movie.duration <= 40);
                setFilteredMovies(filterMoviesDuration);
            } else {
                const filterDuration = props.savedMovies.filter(movie => movie.duration <= 40);
                console.log(filterDuration);
                setFilteredMovies(filterDuration);
            }
        } else if (props.filmForSearch.length > 0){
            const filterMovies = props.savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()));
            console.log(filteredMovies)
            setFilteredMovies(filterMovies); 
        }
      }, [props.filmForSearch, props.isShortMovies, props.searchSavedMovies, props.savedMovies]);

    return(
        <div>
            {props.windowWidth > 768 ? <Header/> : <HeaderMini/>}
            {props.windowWidth > 680 ? <SearchForm onSearchSavedMovies = {props.onSearchSavedMovies} isBtnActive = {props.isBtnActive} onCheckbox = {props.onCheckbox} onSearch = {props.onSearch}/> : <SearchFormMini onSearchSavedMovies = {props.onSearchSavedMovies} isBtnActive = {props.isBtnActive} onCheckbox = {props.onCheckbox} onSearch = {props.onSearch}/>}
            <div className="movies">
                <div className="card-list">
                {filteredMovies.map((savedFilm)=>{
                    // console.log(savedFilm);
                    return(
                        <SavedMoviesCard onDeleteMovie = {props.onDeleteMovie} savedFilm = {savedFilm} key={savedFilm._id}/>)
                
                })}
                </div>
                <div className="saved-devider"></div>
            </div>
        </div>
    )
}

export default SavedMovies;