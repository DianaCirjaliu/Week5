import "./FilterBtns.css";

function FilterBtns({ onGenreChange, onRatingChange }) {
  return (
    <div className="filterBtn-container">
      <div className="button">
        Genre
        <select
          defaultValue={"All"}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Action">Action</option>
        </select>
      </div>
      <div className="button">
        Rating
        <select
          defaultValue={"All"}
          onChange={(e) => onRatingChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="8">8+</option>
          <option value="5">5+</option>
          <option value="1">1+</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBtns;
