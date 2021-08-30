import './Main.css'
import AboutMe from '../AboutMe/AboutMe';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';
import HeaderMini from '../HeaderMini/HeaderMini';

function Main(props){
    return(
        <div className="main">
            {(props.loggedIn) & (props.windowWidth > 768) ? <Header/> : ''}
            {(props.loggedIn) & (props.windowWidth <= 768) ? <HeaderMini/> : ''}
            {!props.loggedIn && <NavTab/>}
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </div>
    )   
}

export default Main;