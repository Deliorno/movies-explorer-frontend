const handleOriginalResponse = (res) => {
    console.log(res)
    if (res.ok){
        return res.json();  
    }
    return Promise.reject(`Ошибка: ${res.status}`)
    .catch((err)=>{
     console.log(err)})
}

class MovieApi {
constructor() {
  //super(props);
    this._urlMovies = "https://api.nomoreparties.co/beatfilm-movies"
}
 
getSiteMovies(){
    return fetch(this._urlMovies, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      }) 
      .then(handleOriginalResponse)
 }

}
const movieApi = new MovieApi();
export default movieApi;
