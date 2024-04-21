import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Camera from "./pages/Camera";
import View from "./pages/View";
import Extra from "./pages/Recipes";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Camera" element={<Camera />} />
        <Route path="/View" element={<View />} />
        <Route path="/Recipes" element={<Extra />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
