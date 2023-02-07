import {
  Configuration,
  PublicClientApplication,
  RedirectRequest,
} from "@azure/msal-browser";

export const susiB2CPolicy = {
  names: {
    signUpSignIn: "B2C_1_SUSI_PROVIDER",
  },
  authorities: {
    signUpSignIn: {
      authority: "https://donchodonev92.b2clogin.com/donchodonev92.onmicrosoft.com/B2C_1_SUSI_PROVIDER",
    }
  },
  authorityDomain: "donchodonev92.b2clogin.com"
};

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID as string,
    authority: susiB2CPolicy.authorities.signUpSignIn.authority,
    knownAuthorities: [susiB2CPolicy.authorityDomain],
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest: RedirectRequest = {
  authority: susiB2CPolicy.authorities.signUpSignIn.authority,
  scopes: [process.env.REACT_APP_SCOPE as string],
};

export const graphConfig = {
  graphMeEndpoint: process.env.REACT_APP_BASE_URL,
};

export const msalInstance = new PublicClientApplication(msalConfig);