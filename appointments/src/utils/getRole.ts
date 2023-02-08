import { IMsalContext } from "@azure/msal-react";

export const getRole = (context: IMsalContext): string => {
  if (context.accounts.length > 0) {
    return context.accounts[0]?.idTokenClaims?.extension_AppRole as string;
  } else {
    return "";
  }
};
