const key = '6d683f223ef00ee0b87892980189f115';
const endpoint_url = 'https://api.themoviedb.org/3/';

function getListMovie (){
  fetch(endpoint url + "/movie/now playing?api 6d683f223ef00ee0b87892980189f115" + 6d683f223ef00ee0b87892980189f115 + "&language=en-US&page=1")
  .then (status)
  .then (json)
  .then (function (data) {
    var moviesHTML ="";
    data.results.forEach(function(movie) {
      moviesHTML += `
      <div class="col m3 s6">
      <div class="card">
      <a href="./movie.htm?id=${movies.id}">
      </div>
      </a>
      <div class="card-content text-center">
      <strong>${movie.title}</strong>
      </div>
      </div>
      </div>
      `;
    });
    document.getElementById("movie_list").innerHTML = moviesHTML;

  })
  .catch(error);
}
