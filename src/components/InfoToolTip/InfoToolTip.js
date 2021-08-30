// import Err from "../images/Err.svg";
// import Ok from "../images/Ok.svg"
import './InfoToolTip.css';
function InfoToolTip(props){

    setTimeout(function() {
        props.onClosePopup();
     }, 2500);

    return(
        <div className={props.isInfoTooltipOpen ? 'popup popup_display_flex' : 'popup'}>
                <div className="popup__container">
                    <div className="popup__card">
                        <p className="popup__response-text">Данные изменены</p>
                    </div>
                </div>
        </div>
    )
}

export default InfoToolTip;