import HomeBtn from "../../components/HomeBtn/HomeBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBtns from "../../components/FilterBtns/FilterBtns";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.css";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <div className="container-home">
      <div className="header">
        <HomeBtn />
        <SearchBar onSearch={setSearch}/>
        <FilterBtns/>
      </div>
      <MovieCard searchTerm={search}/>
    </div>
  );
}

export default Home;
