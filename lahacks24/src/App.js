import "./App.css";

import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactTyped from "react-typed";
import Home from "./pages/Home";
import Camera from "./pages/Camera";
import View from "./pages/View";
import Recipes from "./pages/Recipes";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/Camera",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Camera" element={<Camera />} />
          <Route path="/View" element={<View />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
