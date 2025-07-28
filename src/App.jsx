import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import TripPage from "./pages/tripPage/TripPage";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Navigate to="/trip" replace />} />
      <Route path="trip" element={<TripPage />} />
      {/* other routes */}
    </Route>
    </Routes>
  );
};

export default App;
