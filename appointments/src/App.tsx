import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "./components/Navigation/Navigation";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import {
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";

function App() {
  const Button: React.FC = () => (
    <button onClick={callApiAsync}>Call weather api</button>
  );

  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress: interactionStatus, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const accessTokenRequest = {
    scopes: [`api://${process.env.REACT_APP_SERVER_ID}/access_as_user`],
    account: accounts[0],
  };

  const callApiAsync = () => {
    var headers = new Headers();
    var bearer = "Bearer " + accessToken;

    headers.append("Authorization", bearer);
    var options = {
      method: "GET",
      headers: headers,
    };
    var weatherEndpoint = "https://localhost:7067/WeatherForecast";

    fetch(weatherEndpoint, options).then(console.log).catch(console.log);
  };

  const ensureAccessTokenExists = (interactionStatus: InteractionStatus) => {
    if (interactionStatus === InteractionStatus.None && !isAuthenticated) {
      instance.loginPopup().then((authResult) => {
        setAccessToken(authResult.accessToken);
      });
    } else if (
      interactionStatus === InteractionStatus.None &&
      isAuthenticated
    ) {
      instance
        .acquireTokenSilent(accessTokenRequest)
        .then((res) => setAccessToken(res.accessToken))
        .catch((error) => {
          if (error instanceof InteractionRequiredAuthError) {
            instance
              .acquireTokenPopup(accessTokenRequest)
              .then((res) => setAccessToken(res.accessToken));
          }
        });
    }
  };

  useEffect(() => {
    ensureAccessTokenExists(interactionStatus);
  }, [interactionStatus]);

  return (
    <>
      <Navigation pages={[]} settings={["Logout"]} />
      <div className="App">
        <header className="App-header">
          {isAuthenticated ? <Button /> : <p>User is not logged in</p>}
        </header>
      </div>
    </>
  );
}

export default App;
