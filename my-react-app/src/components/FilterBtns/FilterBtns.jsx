import "./FilterBtns.css";

function FilterBtns() {
  return (
    <div className="filterBtn-container">
      <div className="button">
        Genre
        <select defaultValue={"All"}>
          <option>All</option>
          <option>Drama</option>
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Action</option>
        </select>
      </div>
      <div className="button">
        Rating
        <select defaultValue={"All"}>
          <option>All</option>
          <option>5 stars</option>
          <option>4 stars</option>
          <option>3 stars</option>
          <option>2 stars</option>
          <option>1 star</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBtns;
