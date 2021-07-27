// import logo from './logo.svg';
import '../../../src/index.css';
import Main from '../Main/Main';
import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import HeaderMini from '../HeaderMini/HeaderMini';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import SavedMovies from '../SavedMovies/SavedMovies';
import SearchFormMini from '../SearchFormMini/SearchFormMini';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrPage from '../ErrPage/ErrPage';
import './App.css'

function App() {

  const [windowWidth, showWindowWidth] = React.useState([window.innerWidth]);

  function swindowWidth(){
    showWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    console.log(window.location.pathname)
    console.log(window.location.pathname == '/profile' || window.location.pathname == '/signin' || window.location.pathname =='/signup')
    window.addEventListener('resize', swindowWidth);
  }, []);

  return (
    <div className="app-main">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/movies">
          {windowWidth > 768 ? <Header/> : <HeaderMini/>}
          {windowWidth > 680 ? <SearchForm/> : <SearchFormMini/>}
          <Movies/>
        </Route>
        <Route path="/saved-movies">
          {windowWidth > 768 ? <Header/> : <HeaderMini/>}
          {windowWidth > 680 ? <SearchForm/> : <SearchFormMini/>}
          <SavedMovies/>
        </Route>
        <Route path="/profile">
          {windowWidth > 768 ? <Header/> : <HeaderMini/>}
          <Profile/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="/*">
          <ErrPage/>
        </Route>
      </Switch>
      { window.location.pathname == '/profile' || window.location.pathname == '/signin' || window.location.pathname =='/signup' || window.location.pathname =='/err404' ? <></> : <Footer/>  }
    </div>
  );
}

export default App;
