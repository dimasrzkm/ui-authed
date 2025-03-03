import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
);
