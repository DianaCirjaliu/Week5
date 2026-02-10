import "./MovieCard.css";
import Data from "../../assets/movies/movies.json";

function MovieCard() {
  return (
    <div className="container-movies">
      {Data.map((movie) => {
        return (
          <article key={movie.id} className="movie-card">
            <img src={`/images/${movie.image}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h3>Genre: {movie.genre}</h3>
            <h3 >Rating: {movie.rating}</h3>
          </article>
        );
      })}
    </div>
  );
}

export default MovieCard;
