import './Footer.css'

function Footer(props){
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</div>
                <div className="footer__info">
                    <p className="footer__creator">&#169; 2021</p>
                    <ul className="footer__links">
                        <a href="https://praktikum.yandex.ru/profile/web/" className="footer__link" rel="noopener noreferrer" target="_blank">Яндекс.Практикум</a>
                        <a href="https://github.com/Deliorno" className="footer__link" rel="noopener noreferrer" target="_blank">Github</a>
                        <a href="https://vk.com/delior" className="footer__link" rel="noopener noreferrer" target="_blank">Вконтакте</a>
                    </ul>
                </div>
            </div>
      </footer>
    )
}
export default Footer;