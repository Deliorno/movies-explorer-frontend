import './AboutProject.css'

function AboutProject(props){
    return(
        <div className="about">
            <h2 className="about__header">О проекте</h2>
            <div className="about__info">
                <div className="about__info-block">
                    <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__info-block">
                    <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__timeline">
                <div className="about__lines about__lines_theme_green">
                    <p className="about__line about__line_theme_green">1 неделя</p>
                    <span className="about__subtitle">Backend</span>
                </div>
                <div className="about__lines about__lines_theme_dark">
                    <p className="about__line about__line_theme_dark">4 недели</p>
                    <span className="about__subtitle">Front-end</span>
                </div>
            </div>
      </div>
    )
}

export default AboutProject;