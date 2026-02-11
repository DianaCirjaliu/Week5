import "./HomeBtn.css";
import { useNavigate } from "react-router-dom";

function HomeBtn() {
  const navigate = useNavigate();
  return (
    <div className="homeBtn-container">
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/watchlist")}>Watchlist</button>
    </div>
  );
}

export default HomeBtn;
