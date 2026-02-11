import "./MovieCard.css";
import Data from "../../assets/movies/movies.json";
import FavBtn from "../../components/FavBtn/FavBtn";

function MovieCard({
  searchTerm = "",
  genreFilter = "All",
  ratingFilter = "All",
}) {
  return (
    <div className="container-movies">
      {Data.filter((movie) => {
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
      }).map((movie) => {
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
            <FavBtn></FavBtn>
          </article>
        );
      })}
    </div>
  );
}

export default MovieCard;
