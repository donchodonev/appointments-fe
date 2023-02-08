export interface IAuthorizeProps {
  role: string;
  allowedRoles: string[];
  redirectPath?: string;
}

export enum Role {
  Admin = "ADMIN",
  Provider = "PROVIDER",
}
