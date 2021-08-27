import './Main.css'
import AboutMe from '../AboutMe/AboutMe';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';

function Main(props){
    return(
        <div className="main">
            {props.loggedIn ? <Header/> : <NavTab/>}
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </div>
    )   
}

export default Main;