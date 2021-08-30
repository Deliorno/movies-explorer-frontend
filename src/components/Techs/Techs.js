import './Techs.css'

function Techs(props){
    return(
        <div className="about-tech">
            <div className="about-tech__content">
                <h2 className="about__header">Технологии</h2>
                <h1 className="about-tech__title">7 технологий</h1>
                <p className="about-tech__text">На курсе веб-разработки я освоила технологии, которые применила в дипломном проекте.</p>
                <div className="about-tech__tech-block">
                    <div className="about-tech__tech">HTML</div>
                    <div className="about-tech__tech">CSS</div>
                    <div className="about-tech__tech">JS</div>
                    <div className="about-tech__tech">React</div>
                    <div className="about-tech__tech">Git</div>
                    <div className="about-tech__tech">Express</div>
                    <div className="about-tech__tech">mongoDB</div>
                </div>
            </div>
      </div>
    )
}

export default Techs;