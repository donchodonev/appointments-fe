import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import AppointmentPicker from "../components/AppointmentPicker/AppointmentPicker";
import AuthWrapper from "../components/Auth/AuthWrapper";

const Appointments: React.FC<PropsWithChildren> = () => {
  return (
    <AuthWrapper>
      <Box>
        <AppointmentPicker />
      </Box>
    </AuthWrapper>
  );
};

export default Appointments;
