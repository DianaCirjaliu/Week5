import HomeBtn from "../../components/HomeBtn/HomeBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBtns from "../../components/FilterBtns/FilterBtns";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <div className="header">
        <HomeBtn></HomeBtn>
        <SearchBar></SearchBar>
        <FilterBtns></FilterBtns>
      </div>
      <MovieCard></MovieCard>
    </div>
  );
}

export default Home;
