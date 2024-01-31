import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Brand from "./pages/Brand";
import MarketingDetail from "./pages/MarketingDetail";
import BrandDetail from "./pages/BrandDetail";
import SearchResult from "./pages/SearchResult";
import AIBranding from "./pages/AIBranding";
import Mypage from "./pages/Mypage";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/globalStyle";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import GoogleAuthCallback from "./components/Auth/googleAuthCallback";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/marketing/detail/0" element={<MarketingDetail />} />
              <Route
                path="/marketing/detail/:id"
                element={<MarketingDetail />}
              />
              <Route
                path="/auth/google/callback"
                element={<GoogleAuthCallback />}
              />
              <Route path="/brand" element={<Brand />} />
              <Route path="/brand/detail/0" element={<BrandDetail />} />
              <Route path="/brand/detail/:id" element={<BrandDetail />} />
              <Route path="/search/result" element={<SearchResult />} />
              <Route path="/ai-branding" element={<AIBranding />} />
              <Route path="/mypage" element={<Mypage />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
