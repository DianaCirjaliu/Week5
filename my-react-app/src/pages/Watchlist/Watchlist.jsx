import "./Watchlist.css";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import MovieCard from "../../components/MovieCard/MovieCard";

function Watchlist() {
  return (
    <div className="container-watchlist">
      <HomeBtn />
      <h1 className="text-watch">My Watchlist</h1>
      <MovieCard />
    </div>
  );
}

export default Watchlist;
