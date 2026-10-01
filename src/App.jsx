import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import AISummit from "./Components/AISummit";
import Sponsor from "./Components/Summit/Sponsor";
import Sponsorship from "./Components/Sponsorship";
import Frame from "./Components/Frame";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="aisummit" element={<AISummit />} />
        <Route path="aisummit/sponsor" element={<Sponsor />} />
        <Route path="frame" element={<Frame />} />
      </Route>
        <Route path="sponsorship" element={<Sponsorship />} />
        <Route path="sponsor" element={<Navigate to="/sponsorship" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
