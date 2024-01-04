import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
