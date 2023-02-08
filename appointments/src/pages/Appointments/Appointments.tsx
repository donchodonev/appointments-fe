import React from "react";
import { Suspense } from "react";
import Authenticate from "../../components/Auth/Authenticate/Authenticate";
import Authorize from "../../components/Auth/Authorize/Authorize";
import { Role } from "../../components/Auth/Authorize/IAuthorizeProps";
import Loading from "../../components/Auth/Loading";
import { AppointmentsProps } from "./AppointmentsProps";

const Appointments: React.FC<AppointmentsProps> = (props) => {
  const AppointmentPicker = React.lazy(() => import("../../components/AppointmentPicker/AppointmentPicker"))
  const { userRole } = props;

  return (
    <Authenticate redirectPath="/login">
      <Authorize role={userRole} allowedRoles={[Role.Admin, Role.Provider]}>
        <Suspense fallback={<Loading />}>
          <AppointmentPicker />
        </Suspense>
      </Authorize>
    </Authenticate>
  );
};

export default Appointments;
