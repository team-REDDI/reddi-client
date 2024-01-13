import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Brand from "./pages/Brand";
import MarketingDetail from "./pages/MarketingDetail";
import BrandDetail from "./pages/BrandDetail";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/marketing/detail/0" element={<MarketingDetail />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/brand/detail/0" element={<BrandDetail />} />
          <Route path="/search/result" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
