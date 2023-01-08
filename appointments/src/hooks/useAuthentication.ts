import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { authActions } from "../store/auth/authSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect } from "react";

const useAuthentication = () => {
  const { instance, accounts, inProgress: interactionStatus } = useMsal();
  const accessTokenRequest = {
    scopes: [`api://${process.env.REACT_APP_SERVER_ID}/access_as_user`],
    account: accounts[0],
  };

  const dispatch = useAppDispatch();
  const globalAccessToken = useAppSelector((state) => state.auth.accessToken);

  const loginUser = (interactionStatus: InteractionStatus) => {
    if (interactionStatus === InteractionStatus.None) {
      instance
        .acquireTokenSilent(accessTokenRequest)
        .then((res) => {
          dispatch(authActions.loginUser({ accessToken: res.accessToken }));
        })
        .catch(() => {
          instance.acquireTokenPopup(accessTokenRequest).then((res) => {
            dispatch(authActions.loginUser({ accessToken: res.accessToken }));
          });
        });
    }
  };

  useEffect(() => {
    if (!globalAccessToken) {
      loginUser(interactionStatus);
    }
  }, [interactionStatus]);
};

export default useAuthentication;
