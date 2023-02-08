import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { IAuthorizeProps, Role } from "./IAuthorizeProps";

const Authorize: React.FC<PropsWithChildren<IAuthorizeProps>> = (props) => {
    const { role, allowedRoles, redirectPath, children } = props;
    const isAuthorized = allowedRoles.includes(role as Role);

    return (
        <>
            {isAuthorized
                ? children
                : <Navigate to={redirectPath ?? "/"} />}
        </>
    );
};

export default Authorize;