import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const AuthWrapper: React.FC<PropsWithChildren> = (props) => {
  return (
    <>
      <AuthenticatedTemplate>{props.children}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Navigate to={"/login"} />
      </UnauthenticatedTemplate>
    </>
  );
};

export default AuthWrapper;
