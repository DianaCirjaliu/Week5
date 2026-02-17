import "./HomeBtn.css";
import { NavLink } from "react-router-dom";

function HomeBtn() {
  return (
    <div className="homeBtn-container">
      <button className="home-btn">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "home-btn active" : "home-btn"
          }
        >
          Home
        </NavLink>
      </button>
      <button className="watchlist-btn">
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive ? "watchlist-btn active" : "watchlist-btn"
          }
        >
          Watchlist
        </NavLink>
      </button>
    </div>
  );
}

export default HomeBtn;
