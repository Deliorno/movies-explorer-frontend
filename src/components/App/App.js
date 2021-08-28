// import logo from './logo.svg';
import '../../../src/index.css';
import Main from '../Main/Main';
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrPage from '../ErrPage/ErrPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import api from '../../utils/MainApi';
import apiMovie from '../../utils/MoviesApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = React.useState([]);
  const [windowWidth, showWindowWidth] = React.useState([window.innerWidth]);
  const [allFIlms, setAllFIlms] = React.useState([]);
  const [jwt, setJwt] = React.useState('');
  const [currentPath, setCurrentPath] = React.useState([window.location.pathname]);
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filmForSearch, setFilmForSearch] = React.useState([]);
  const [isBtnActive, setIsBtnActive] = React.useState(false);
  const [forSearchSaved, setForSearchSaved] = React.useState(false)
    
  function handleShortFilms(){
    setIsBtnActive(!isBtnActive);
    document.getElementById("toggle-button").checked = !isBtnActive;
  }

  function handleLogIn(password, email){
    api.logIn(password, email)
    .then((data)=>{
      if (data == undefined){
        history.push('/*'); 
      } else {
        console.log(data.token)
        localStorage.setItem('jwt', data.token);
        setJwt(jwt);
        setLoggedIn(true);
        setCurrentPath('/movies')
        history.push('/movies'); 
      }
    })
  }

  function handleRegistration(password, email){
    api.register(password, email)
      .then((data)=>{
        if (data === 'Err'){
        } else {
          history.push('/signin');
        }
    })
  }

  function signOut(){
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

  useEffect(()=>{
    if (loggedIn){
        api.getUserInfo(localStorage.getItem('jwt'))
          .then((userInfo)=> {
              console.log(userInfo)
              setCurrentUser(userInfo.data);
          })

        api.getMovies(localStorage.getItem('jwt'))
          .then((data) => {
            setSavedMovies(data.data);
          })
    }
  },[loggedIn])

  React.useEffect(()=>{
    //console.log('loggedIn ?',loggedIn)
    if (loggedIn){
        // console.log("Переправка на профиль")
        setCurrentPath(window.location.pathname)
        if (currentPath == '/movies'){
          history.push('/movies');
        } 
        else if (currentPath == '/saved-movies'){
          history.push('/saved-movies');
        }
        else if (currentPath == '/profile'){
          history.push('/profile');
        }
        else if (currentPath == '/'){
          history.push('/');
        }
    }
  },[loggedIn])

  useEffect(()=>{
      tokenCheck();
  },[]);

  function tokenCheck () {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      api.getToken(jwt)
      .then((res) => {
        // console.log(res)
        if (res){
            console.log(jwt)
            //console.log('Авторизуем')
            setLoggedIn(true);
        }
      }); 
    }
  }

  function handleUpdateUser(data){
    api.setUserInfo(data,localStorage.getItem('jwt'))
    .then((resp)=> {
        setCurrentUser(resp.data);
    })
  }

  function swindowWidth(){
    showWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', swindowWidth);
  }, []);

  function handleSearch(filmForSearch){
    setFilmForSearch(filmForSearch);
    apiMovie.getSiteMovies()
      .then((data) =>  {
          setAllFIlms(data);
          console.log(data);
      });
  }

  function handleCreateMovie(data){
    api.createMovies(data, localStorage.getItem('jwt'))
      .then((data) =>  {
          // setAllFIlms(data);
          // console.log(data);
      });
  }

  function handleDeleteMovie(id){
    api.getMovies(localStorage.getItem('jwt'))
      .then((data) => {
        data.data.forEach((film) => {
          if (film.movieId == id){
            api.deleteMovies(film._id, localStorage.getItem('jwt'))
              .then((data) =>  {
                const newMovies = savedMovies.filter(movie => movie._id !== film._id);
                setSavedMovies(newMovies);
              });
          }
        })
      })
  }

  function toSearchSaved(){
    setForSearchSaved(!forSearchSaved);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app-main">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} windowWidth = {windowWidth}/>
          </Route> 
          <ProtectedRoute path="/movies" component={Movies} 
            loggedIn={loggedIn}
            isShortMovies = {isBtnActive} 
            filmForSearch = {filmForSearch} 
            savedMovies = {savedMovies} 
            onDeleteMovie = {handleDeleteMovie} 
            onCreateMovie = {handleCreateMovie} 
            films = {allFIlms}
            windowWidth = {windowWidth}
            onSearchSavedMovies = {toSearchSaved} 
            isBtnActive = {isBtnActive} 
            onCheckbox = {handleShortFilms} 
            onSearch = {handleSearch}/>
          <ProtectedRoute path="/saved-movies" component={SavedMovies} 
            loggedIn={loggedIn}
            isShortMovies = {isBtnActive} 
            filmForSearch = {filmForSearch} 
            onDeleteMovie = {handleDeleteMovie} 
            savedMovies = {savedMovies} 
            windowWidth = {windowWidth}
            onSearchSavedMovies = {toSearchSaved} 
            isBtnActive = {isBtnActive} 
            onCheckbox = {handleShortFilms} 
            onSearch = {handleSearch}/>
          <ProtectedRoute path="/profile" component={Profile} 
            loggedIn={loggedIn}
            windowWidth = {windowWidth} 
            onExit = {signOut} 
            onUpdateUser={handleUpdateUser}/>
          <Route path="/signin">
            <Login onLogin={handleLogIn}/>
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegistration}/>
          </Route>
          <Route path="/*">
            <ErrPage/>
          </Route>
        </Switch>
        { window.location.pathname == '/profile' || window.location.pathname == '/signin' || window.location.pathname =='/signup' || window.location.pathname =='/err404' ? <></> : <Footer/>  }
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
