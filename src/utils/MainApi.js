const handleOriginalResponse = (res) => {
    console.log(res)
    if (res.ok){
        return res.json();  
    }
    return Promise.reject(`Ошибка: ${res.status}`)
    .catch((err)=>{
     console.log(err)})
}

// https://api.deliorno.your-movies.nomoredomains.club
// http://localhost:3005

class MainApi {
constructor() {
  //super(props);
    this._urlMovies = "https://api.deliorno.your-movies.nomoredomains.club/movies";
    this._urlUserInfo = "https://api.deliorno.your-movies.nomoredomains.club/users/me";
    this._baseUrl = "https://api.deliorno.your-movies.nomoredomains.club";
    // this._headers = {
    //     'content-type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    //   };
}

// getData(token){
//    return fetch(this._urlCards, {
//         method: 'GET',
//         headers: {
//           'content-type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//     })
//     .then(handleOriginalResponse)
// }

getUserInfo(token){
    return fetch(this._urlUserInfo, {
         method: 'GET',
         headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
     })
     .then(handleOriginalResponse)
 }

 setUserInfo(data, token){
    return fetch(this._urlUserInfo, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name
        })
      }) 
      .then(handleOriginalResponse)
 }

 getMovies(token){
    return fetch(this._urlMovies, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }) 
      .then(handleOriginalResponse)
 }
 
 createMovies(data,token){
    return fetch(this._urlMovies, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: 'https://api.nomoreparties.co' + data.image.url,
            trailer: data.trailerLink,
            thumbnail: 'https://api.nomoreparties.co/' + data.image.formats.thumbnail.url,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN
        })
      }) 
      .then(handleOriginalResponse)
 }

 deleteMovies(moviedId,token){
   console.log(moviedId)
    return fetch(`${this._urlMovies}/${moviedId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }) 
      .then(handleOriginalResponse)
 }

  register(password, email, name){
    console.log(JSON.stringify({"password":password, "email":email}))
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"password":password, "email":email, "name":name})
    })
  .then(handleOriginalResponse)
  };

  logIn(password, email){
    console.log(JSON.stringify({"password":password, "email":email}))
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"password":password, "email":email})
    })
  .then(handleOriginalResponse)};

  getToken(token){
    //console.log(JSON.stringify({"password":password, "email":email}))
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      //body: JSON.stringify({"password":password, "email":email})
    })
  .then(handleOriginalResponse)};

//  changeLikeCardStatus(cardId, isLiked, token){
//      if(isLiked){
//         return fetch(`${this._urlCards}/${cardId}/likes`, {
//             method: 'PUT',
//             headers: {
//               'content-type': 'application/json',
//               'Authorization': `Bearer ${token}`
//             }
//           }) 
//           .then(handleOriginalResponse)
//      } else {
//         return fetch(`${this._urlCards}/${cardId}/likes`, {
//             method: 'DELETE',
//             headers: {
//               'content-type': 'application/json',
//               'Authorization': `Bearer ${token}`
//             }
//           }) 
//           .then(handleOriginalResponse)
//      }
//  }
}

const api = new MainApi();
export default api;
