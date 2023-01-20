import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Appointments from "./pages/Appointments";
import { BottomNavigation, Box, Typography } from "@mui/material";

const App: React.FC = () => (
  <>
    <Navigation />
    <Pages />
    <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
      FOOTER
    </BottomNavigation>
  </>
);

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes>
  );
};

export default App;
