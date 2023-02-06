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
import { BottomNavigation } from "@mui/material";
import { useMsal } from "@azure/msal-react";

const App: React.FC = () => {
  const msal = useMsal();
  const isLoggedIn = msal.accounts.length !== 0;

  return (
    <>
      <Navigation accounts={msal.accounts} />
      <Pages isLoggedIn={isLoggedIn} />
      <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
        FOOTER
      </BottomNavigation>
    </>
  );
}
const Pages: React.FC<{ isLoggedIn: boolean }> = (props) => {

  return props.isLoggedIn
    ?
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes>
    :
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
};

export default App;
