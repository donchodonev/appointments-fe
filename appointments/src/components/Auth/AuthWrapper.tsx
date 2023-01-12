import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { PropsWithChildren } from "react";
import { loginRequest } from "../../authConfig";
import Error from "../../components/Auth/Error";
import Loading from "../../components/Auth/Loading";

const AuthWrapper: React.FC<PropsWithChildren> = (props) => {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Popup}
      authenticationRequest={loginRequest}
      errorComponent={Error}
      loadingComponent={Loading}
    >
      {props.children}
    </MsalAuthenticationTemplate>
  );
};

export default AuthWrapper;
