import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import Loading from "../components/Auth/Loading";
import Error from "../components/Auth/Error";
import { loginRequest } from "../authConfig";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={loginRequest}
      errorComponent={Error}
      loadingComponent={Loading}
    >
      <Navigate to={"/"} />
    </MsalAuthenticationTemplate>
  );
};

export default Login;
