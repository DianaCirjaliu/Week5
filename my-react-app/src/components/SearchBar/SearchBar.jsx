import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="input-container">
      <input name="text" class="input" placeholder="Search for movie..." />
    </div>
  );
}

export default SearchBar;
