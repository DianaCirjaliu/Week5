import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/Index";
import HomePage from "./pages/Home/Home";
import Watchlist from "./pages/Watchlist/Watchlist";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/home" element={<HomePage />} />
         <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
