const autocompleteConfig = {
  renderOption({ Poster, Title, Year }) {
    const imgSrc = Poster === "N/A" ? "" : Poster;
    return `<img src="${imgSrc}" alt="${Title} image" />
                <h2>${Title}</h2> (${Year})`;
  },

  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "e005c5cb",
        s: searchTerm,
      },
    });

    return response.data.Search || [];
  },
};

createAutoComplete({
  ...autocompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(
      movie.imdbID,
      document.querySelector("#left-summary"),
      "left",
      subscriber
    );
  },
});

createAutoComplete({
  ...autocompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(
      movie.imdbID,
      document.querySelector("#right-summary"),
      "right",
      subscriber
    );
  },
});

let leftMovie;
let rightMovie;

const createSubscriber = () => {
  let sides = [];
  return (side) => {
    sides = [...sides, side];
    console.log("compare", sides);
  };
};

const subscriber = createSubscriber();

const onMovieSelect = async (id, summaryElement, side, subscriber) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "e005c5cb",
      i: id,
    },
  });
  summaryElement.innerHTML = movieTemplate(response.data);
  subscriber(side);
  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];
    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);

    const makeLoser = ({ classList }) => {
      classList.remove("is-primary");
      classList.add("is-warning");
    };
    makeLoser(rightSideValue > leftSideValue ? leftStat : rightStat);
  });
};

const movieTemplate = (movieDetail) => {
  console.log(movieDetail);
  const dollars = parseInt(
    movieDetail?.BoxOffice?.replace(/\$/g, "").replace(/,/g, "")
  );
  const metascore = parseInt(movieDetail.Metascore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));

  const awards = movieDetail.Awards.split(" ")
    .map((x) => parseInt(x))
    .filter((y) => !isNaN(y))
    .reduce((count, num) => count + num, 0);

  console.log(awards);

  return `
    <article class="media">
        <figure class="media-left">
            <p class="image">
                <img src="${movieDetail.Poster}" alt="Poster image">
            </p>
        </figure>
        <div class="media-content">
        <div class="content">
                <h2>${movieDetail.Title}</h2>
                <h3>${movieDetail.Genre}</h3>
                <p>${movieDetail.Plot}</p>
            </div>
        </div>
    </article>
    <article data-value=${awards} class="notification is-primary">
        <p class="title">${movieDetail.Awards}</p>
        <p class="subtitle">Awards</p>
    </article>
    <article data-value=${dollars} class="notification is-primary">
        <p class="title">${movieDetail.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
    </article>
    <article data-value=${metascore} class="notification is-primary">
        <p class="title">${movieDetail.Metascore}</p>
        <p class="subtitle">Metascore</p>
    </article>
    <article data-value=${imdbRating} class="notification is-primary">
        <p class="title">${movieDetail.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-primary">
        <p class="title">${movieDetail.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
    </article>
    `;
};
