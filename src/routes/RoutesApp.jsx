import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddScreen from "../pages/AddScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/add" element={<AddScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
