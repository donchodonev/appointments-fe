import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticateProps } from "./AuthenticateProps";

const Authenticate: React.FC<PropsWithChildren<AuthenticateProps>> = (props) => {
  const { redirectPath, children } = props;

  return (
    <>
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Navigate to={redirectPath} />
      </UnauthenticatedTemplate>
    </>
  );
};

export default Authenticate;
