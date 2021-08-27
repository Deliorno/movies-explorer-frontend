import React, { useEffect }from "react";
import './SavedMovies.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';
import api from '../../utils/MainApi';
import Header from '../Header/Header';
import HeaderMini from '../HeaderMini/HeaderMini';
import SearchForm from '../SearchForm/SearchForm';
import SearchFormMini from '../SearchFormMini/SearchFormMini';

function SavedMovies(props){

    const [filteredMovies, setFilteredMovies] = React.useState([]);


    useEffect(() => {
        console.log(typeof props.filmForSearch)
        console.log(typeof props.filmForSearch !== 'object')
        if(props.isShortMovies){
            const filterMovies = props.savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()) & movie.duration <= 40);
            console.log(filterMovies)
            setFilteredMovies(filterMovies);
        } else if (typeof props.filmForSearch !== 'object'){
            const filterMovies = props.savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(props.filmForSearch.toLowerCase()));
            console.log(filteredMovies)
            setFilteredMovies(filterMovies); 
        }
        if (typeof props.filmForSearch == 'object'){
            setFilteredMovies(props.savedMovies); 
        }
      }, [props.filmForSearch, props.isShortMovies, props.searchSavedMovies, props.savedMovies]);
      
      useEffect(() => {
        
      }, []);

    return(
        <div>
            {props.windowWidth > 768 ? <Header/> : <HeaderMini/>}
            {props.windowWidth > 680 ? <SearchForm onSearchSavedMovies = {props.onSearchSavedMovies} isBtnActive = {props.isBtnActive} onCheckbox = {props.onCheckbox} onSearch = {props.onSearch}/> : <SearchFormMini onSearchSavedMovies = {props.onSearchSavedMovies} isBtnActive = {props.isBtnActive} onCheckbox = {props.onCheckbox} onSearch = {props.onSearch}/>}
            <div className="movies">
                <div className="card-list">
                {filteredMovies.map((savedFilm)=>{
                    console.log(savedFilm);
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