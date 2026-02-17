import { useParams, useNavigate } from "react-router-dom";
import styles from "./MovieDetails.module.css";

function MovieDetails({ movies }) {
  const { id } = useParams(); //extract the id
  const navigate = useNavigate();

  //find movie
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div>
        The movie was not found{" "}
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={`/images/${movie.image}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <p>
          <strong>Gen:</strong> {movie.genre}
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default MovieDetails;
