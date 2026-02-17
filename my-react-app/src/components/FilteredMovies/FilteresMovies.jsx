import { useSearchParams, Link, useNavigate } from "react-router-dom";
import styles from "./FilteredMovies.module.css";

function FilteredMovies({ movies }) {
  const [searchParams] = useSearchParams(); //check what is after ?
  const navigate = useNavigate();

  //get parameteer
  const searchQuery = searchParams.get("search") || ""; //check in url if there is something like search=
  const order = searchParams.get("order") || "asc"; //check in url if there is something like order=

  //filter and sort
  const processedMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (order === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <div className={styles.container}>
      <h1>Filtered Movie List</h1>

      <div>
        <p>Search: {searchQuery || "All"}</p>
        <p>Order: {order}</p>
      </div>

      <div className={styles.parent}>
        {processedMovies.map((movie) => (
          <article key={movie.id} className={styles.card}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`/images/${movie.image}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
            <p>Genre:{movie.genre}</p>
            <p>Rating:{movie.rating}</p>
          </article>
        ))}
      </div>

      {processedMovies.length === 0 && (
        <div>
          {" "}
          <p className="no-results">No movies found.</p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default FilteredMovies;
