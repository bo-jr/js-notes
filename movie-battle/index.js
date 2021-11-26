// returns a list of movies
const fetchData = async (searchTerm) => {
  // http://www.omdbapi.com/?apikey=[yourkey]&
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '',
      s: searchTerm
      // i: 'tt0848228'
    }
  });

  // handling the case where API respones returns "Error"
  if (response.data.Error) { // this is due to the API respose
    return [];
  }

  return response.data.Search; // this is due to the API reponse
}

const root = document.querySelector('.autocomplete'); // div class
root.innerHTML = `
  <label><b>Search for a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async event => {
  // fetch a list of movies
  const movies = await fetchData(event.target.value);
  
  dropdown.classList.add('is-active'); // it is now <div class="dropdown is-active">

  for (let movie of movies) {
    // set up the a element
    const option = document.createElement('a');

    // a content
    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src="${movie.Poster}" />
      ${movie.Title}
    `;

    // actually add the a content on the page
    resultsWrapper.appendChild(option);
  }
};

// on input (listening for an event), fetch data (has debouncer)
input.addEventListener('input', debounce(onInput, 500));
