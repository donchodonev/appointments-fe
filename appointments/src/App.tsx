import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "./components/Navigation/Navigation";
import useAuthentication from "./hooks/useAuthentication";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const Button: React.FC = () => (
    <button onClick={callApiAsync}>Call weather api</button>
  );

  useAuthentication();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const isLoggedIn = accessToken;

  const callApiAsync = () => {
    var headers = new Headers();
    var bearer = "Bearer " + accessToken;

    headers.append("Authorization", bearer);
    var options = {
      method: "GET",
      headers: headers,
    };
    var weatherEndpoint = "https://localhost:7092/WeatherForecast";

    fetch(weatherEndpoint, options)
      .then((res) => console.log(res.json()))
      .catch(console.log);
  };

  return (
    <>
      <Navigation />
      <div className="App">
        <header className="App-header">
          {isLoggedIn ? <Button /> : <p>User is not logged in</p>}
        </header>
      </div>
    </>
  );
}

export default App;
