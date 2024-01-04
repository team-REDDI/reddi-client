import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Brand from "./pages/Brand";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/brand" element={<Brand />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
