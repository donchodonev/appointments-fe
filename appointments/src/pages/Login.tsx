import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Error from "../components/Auth/Error";
import Loading from "../components/Auth/Loading";

const Login: React.FC = () => {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Popup}
      authenticationRequest={loginRequest}
      errorComponent={Error}
      loadingComponent={Loading}
    >
      <p>Login</p>
    </MsalAuthenticationTemplate>
  );
};

export default Login;
