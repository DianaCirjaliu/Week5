import "./Watchlist.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";

function Watchlist() {
  const [watchlist, setWatchList] = useState(() => {
    const saved = localStorage.getItem("movies-watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const removeFromWatchList = (movie) => {
    setWatchList((prev) => prev.filter((m) => m.id !== movie.id));
  };

  return (
    <div className="container-watchlist">
      <h1 className="text-watch">My Watchlist</h1>
      {watchlist.length > 0 ? (
        <MovieCard
          movies={watchlist}
          watchlist={watchlist}
          onFavToggle={removeFromWatchList}
        />
      ) : (
        <p className="empty-msg">Nu movies were added in the WatchList.</p>
      )}
    </div>
  );
}

export default Watchlist;
