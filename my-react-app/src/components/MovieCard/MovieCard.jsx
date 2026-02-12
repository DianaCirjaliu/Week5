import "./MovieCard.css";
import FavBtn from "../../components/FavBtn/FavBtn";

function MovieCard({
  movies = [],
  searchTerm = "",
  genreFilter = "All",
  ratingFilter = "All",
  onFavToggle,
  watchlist = [],
}) {
  return (
    <div className="container-movies">
      {movies
        .filter((movie) => {
          const matchSearch = movie.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          const matchGenre =
            genreFilter === "All" ||
            movie.genre.toLowerCase() === genreFilter.toLowerCase();

          //we need to convert from string to number
          let matchRating = true;
          if (ratingFilter != "All") {
            const rating = parseInt(ratingFilter);
            matchRating = Number(movie.rating) >= rating;
          }
          return matchSearch && matchGenre && matchRating;
        })
        .map((movie) => {
          const isFav = watchlist.some((m) => m.id === movie.id);

          let color = "green";
          const rating = Number(movie.rating);

          if (rating < 5) {
            color = "red";
          } else if (rating < 8) {
            color = "yellow";
          }
          return (
            <article key={movie.id} className="movie-card">
              <img src={`/images/${movie.image}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <h3>Genre: {movie.genre}</h3>
              <h3>
                Rating:{" "}
                <span className="rating" style={{ color }}>
                  {movie.rating}
                </span>
              </h3>
              <FavBtn isFav={isFav} onToggle={() => onFavToggle(movie)} />
            </article>
          );
        })}
    </div>
  );
}

export default MovieCard;
