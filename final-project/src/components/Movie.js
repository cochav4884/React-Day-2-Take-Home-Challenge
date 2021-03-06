import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, backdrop_path, overview, vote_average, original_language, release_date, vote_count, popularity, genre_ids }) => (
  <div className="movie">
    <img
      src={
        backdrop_path
          ? IMG_API + backdrop_path
          : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80chrome-extension://mhffmephdchhhbfjmdpoaldedhhdanbn/homePage.html"
      }
      alt={title}
    />{" "}
      <div className="movie-info">
      <h3> {title} </h3>{" "}
    </div> 
      <span className={`tag ${setVoteClass(vote_average)}`}>
        Vote Average
        {" "}
        {vote_average}{" "}
      </span>{" "} <br /> <br />
      <span className={`tag2 ${setVoteClass(vote_count)}`}>
        Vote Count
        {" "}
        {vote_count}{" "}
      </span>{" "} <br /> <br />
      <span className={`tag3 ${setVoteClass(original_language)}`}>
        Original Language
        {" "}
        {original_language}{" "}
      </span>{" "} <br /> <br />
      <span className={`tag4 ${setVoteClass(release_date)}`}>
        Release Date
        {" "}
        {release_date}{" "}
      </span>{" "} <br /> <br />
      <span className={`tag5 ${setVoteClass(popularity)}`}>
        Popularity
        {" "}
        {popularity}{" "}
      </span>{" "} <br /> <br />
      <span className={`tag6 ${setVoteClass(genre_ids)}`}>
        Genre Id
        {" "}
        {genre_ids}{" "}
      </span>{" "} <br /> <br />        
    <div className="movie-over">
      <h2> Overview: </h2> <p> {overview} </p>{" "}
    </div>{" "}
  </div>
);

export default Movie;