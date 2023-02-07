import React from "react";
import { Suspense } from "react";
import AuthWrapper from "../components/Auth/AuthWrapper";
import Loading from "../components/Auth/Loading";

const Appointments: React.FC = () => {
  const AppointmentPicker = React.lazy(() => import("../components/AppointmentPicker/AppointmentPicker"))

  return (
    <AuthWrapper>
      <Suspense fallback={<Loading />}>
        <AppointmentPicker />
      </Suspense>
    </AuthWrapper>
  );
};

export default Appointments;
