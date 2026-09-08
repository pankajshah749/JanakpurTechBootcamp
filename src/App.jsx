import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import AISummit from "./Components/AISummit";
import Sponsor from "./Components/Summit/Sponsor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="aisummit" element={<AISummit />} />
          <Route path="aisummit/sponsor" element={<Sponsor />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
