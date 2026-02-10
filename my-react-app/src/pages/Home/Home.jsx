import HomeBtn from "../../components/HomeBtn/HomeBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBtns from "../../components/FilterBtns/FilterBtns";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <HomeBtn></HomeBtn>
      <SearchBar></SearchBar>
      <FilterBtns></FilterBtns>
    </div>
  );
}

export default Home;
