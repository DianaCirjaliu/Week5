import "./SearchBar.css";
import Data from "../../assets/movies/movies.json";

function SearchBar({ onSearch }) {
  return (
    <div className="input-container">
      <input
        name="text"
        className="input"
        placeholder="Search for movie..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
