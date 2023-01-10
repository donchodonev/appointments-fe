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

function App() {
  // useAuthentication();
  // const accessToken = useAppSelector((state) => state.auth.accessToken);

  // const callApiAsync = () => {
  //   var headers = new Headers();
  //   var bearer = "Bearer " + accessToken;

  //   headers.append("Authorization", bearer);
  //   var options = {
  //     method: "GET",
  //     headers: headers,
  //   };
  //   var weatherEndpoint = "https://localhost:7092/WeatherForecast";

  //   fetch(weatherEndpoint, options)
  //     .then((res) => console.log(res.json()))
  //     .catch(console.log);
  // };

  return (
    <>
      <Navigation />
      <Pages />
    </>
  );
}

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
