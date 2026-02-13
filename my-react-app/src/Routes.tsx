import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/Index";
import HomePage from "./pages/Home/Home";
import Watchlist from "./pages/Watchlist/Watchlist";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback/ErorrFallback";

function AppRoutes() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="*" element={<div>Page not found (404)</div>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default AppRoutes;
