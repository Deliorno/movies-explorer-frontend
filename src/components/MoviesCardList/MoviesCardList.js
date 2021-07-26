import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props){
    return(
        <div>
            <MoviesCard/>
            <div className="more-movies">
                <button type="button" className="more-movies-btn">Еще</button>
            </div>
        </div>
    )
}

export default MoviesCardList;