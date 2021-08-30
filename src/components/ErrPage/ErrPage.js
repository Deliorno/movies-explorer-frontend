import { useHistory } from 'react-router-dom'; 
import './ErrPage.css';
// const browserHistory = require('react-router/lib/BrowserHistory').default;
// onClick={browserHistory.goBack}

function ErrPage(props){

    const history = useHistory(); 

    return(
        <div className="err">
            <h1 className="err__header">404</h1>
            <p className="err__text">Страница не найдена</p>
            <p className="err__button" onClick={() => history.goBack()}>Назад</p>
        </div>
    )
}

export default ErrPage;