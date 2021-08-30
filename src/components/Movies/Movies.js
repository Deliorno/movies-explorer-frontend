import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Header from '../Header/Header';
import HeaderMini from '../HeaderMini/HeaderMini';
import SearchForm from '../SearchForm/SearchForm';
import SearchFormMini from '../SearchFormMini/SearchFormMini';

function Movies(props){
    // console.log(props.films)
    return(
        <div>
            {props.windowWidth > 768 ? <Header/> : <HeaderMini/>}
            {props.windowWidth > 680 ? <SearchForm onSearchSavedMovies = {props.onSearchSavedMovies} isBtnActive = {props.isBtnActive} onCheckbox = {props.onCheckbox} onSearch = {props.onSearch}/> : <SearchFormMini onSearchSavedMovies = {props.onSearchSavedMovies} isBtnActive = {props.isBtnActive} onCheckbox = {props.onCheckbox} onSearch = {props.onSearch}/>}
            <div className="movies">
                <MoviesCardList isShortMovies = {props.isShortMovies} filmForSearch = {props.filmForSearch} savedMovies = {props.savedMovies} onDeleteMovie = {props.onDeleteMovie} onCreateMovie = {props.onCreateMovie} films={props.films}/>
            </div>
        </div>
    )
}

export default Movies;