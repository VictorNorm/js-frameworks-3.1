import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login/loginpage" element={<LoginPage />} />
      <Route path="/dashboard/dashboardpage" element={<DashboardPage />} />
    </Routes>
  </Router>,
  rootElement
);
