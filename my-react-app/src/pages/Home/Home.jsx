import HomeBtn from "../../components/HomeBtn/HomeBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBtns from "../../components/FilterBtns/FilterBtns";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.css";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  return (
    <div className="container-home">
      <div className="header">
        <HomeBtn />
        <SearchBar onSearch={setSearch} />
        <FilterBtns
          onGenreChange={setSelectedGenre}
          onRatingChange={setSelectedRating}
        />
      </div>
      <MovieCard
        searchTerm={search}
        genreFilter={selectedGenre}
        ratingFilter={selectedRating}
      />
    </div>
  );
}

export default Home;
