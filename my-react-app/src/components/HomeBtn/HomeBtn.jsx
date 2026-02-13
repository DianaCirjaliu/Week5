import "./HomeBtn.css";
import { useNavigate } from "react-router-dom";

function HomeBtn() {
  const navigate = useNavigate();
  return (
    <div className="homeBtn-container">
      <button className="home-btn" onClick={() => navigate("/home")}>
        Home
      </button>
      <button className="watchlist-btn" onClick={() => navigate("/watchlist")}>
        Watchlist
      </button>
    </div>
  );
}

export default HomeBtn;
