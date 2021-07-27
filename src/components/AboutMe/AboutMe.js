import './AboutMe.css'

function AboutMe(props){
    return(
        <div className="about-me">
            <h2 className="about__header">Студент</h2>
            <div className="about-me__info">
                <h1 className="about-me__title">Марина</h1>
                <p className="about-me__job">Web-разработчик, 23 года</p>
                <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
                Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className="about-me__links">
                    <a className="about-me__link" href="https://vk.com/delior" rel="noopener noreferrer" target="_blank">Вконтакте</a>
                    <a className="about-me__link" href="https://github.com/Deliorno" rel="noopener noreferrer" target="_blank">Github</a>
                </ul>
                <img src="https://w-dog.ru/wallpapers/11/6/465352526773827/priroda-doroga-les-svet.jpg" alt="" className="about-me__img"></img>
            </div>
        </div>
    )
}

export default AboutMe;