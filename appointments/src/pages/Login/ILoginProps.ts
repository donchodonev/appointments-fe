export interface ILoginProps {
  type: ILoginType;
}

type ILoginType = {
  User: "user";
  Provider: "provider";
};
