import './App.css';
import LandingPage from "./components/landingPage/LandingPage";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import FaqPage from "./components/faqPage/FaqPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/frontend-dev-challenge" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/faq" element={<FaqPage/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
