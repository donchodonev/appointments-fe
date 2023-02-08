import { useMsal } from "@azure/msal-react";
import Authenticate from "../components/Auth/Authenticate/Authenticate";

const Logout: React.FC = () => {
    const msal = useMsal();

    const logoutRequest = {
        account: msal.accounts[0],
        postLogoutRedirectUri: "http://localhost:3000",
    };

    return (
        <Authenticate redirectPath="/">
            <>
                {msal.instance.logoutRedirect(logoutRequest)}
            </>
        </Authenticate>)
}

export default Logout;
