import './Portfolio.css'

function Portfolio(props){
    return(
        <div className="portfolio">
            <h4 className="portfolio__header">Портфолио</h4>
            <ul className="portfolio__links">
            <a className="portfolio__link" href="http://deliorno.your-movies.nomoredomains.club">
                <p className="portfolio__link-text">Статичный сайт</p>
                <div className="portfolio__img"></div>
            </a>
            <a className="portfolio__link" href="http://deliorno.your-movies.nomoredomains.club">
                <p className="portfolio__link-text">Адаптивный сайт</p>
                <div className="portfolio__img"></div>
            </a>
            <a className="portfolio__link" href="http://deliorno.your-movies.nomoredomains.club">
                <p className="portfolio__link-text">Одностраничное приложение</p>
                <div className="portfolio__img"></div>
            </a>
            </ul>
      </div>
    )
}

export default Portfolio;