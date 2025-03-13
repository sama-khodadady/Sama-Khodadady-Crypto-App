import NotFoundPage from "pages/404";
import HomePage from "pages/HomePage";
import CoinDetailPage from "pages/CoinDetailPage";
import { Navigate, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route index element={<Navigate to="/coins" replace />} />
      <Route path="/coins" element={<HomePage />} />
      <Route path="/coins/:id" element={<CoinDetailPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
