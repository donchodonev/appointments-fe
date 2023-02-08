import { IMsalContext } from "@azure/msal-react";

export const userExists = (context: IMsalContext): boolean =>
  context.accounts.length > 0;

export const getRole = (context: IMsalContext): string =>
  userExists(context)
    ? (context.accounts[0].idTokenClaims?.extension_AppRole as string)
    : "";

export const getFirstName = (context: IMsalContext): string =>
  userExists(context)
    ? (context.accounts[0]?.idTokenClaims?.extension_AppRole as string)
    : "";

export const getCompanyName = (context: IMsalContext): string =>
  userExists(context)
    ? (context.accounts[0]?.idTokenClaims?.extension_CompanyName as string)
    : "";
