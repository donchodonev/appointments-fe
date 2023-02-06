import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TimePicker from "../../components/TimePicker/TimePicker";
import DatePicker from "../../components/DatePicker/DatePicker";
import { useState } from "react";
import { getWeather } from "../../api/test";
import { Box } from "@mui/system";
import DurationPicker from "../DurationPicker/DurationPicker";
import ExtendedTypography from "../../Common/ExtendedTypography/ExtendedTypography";

getWeather().then((res) => res);

const AppointmentPicker: React.FC = () => {
  const [unavailableDates, setUnavailableDates] = useState([] as Date[]);
  const [availableTimes, setAvailableTimesDates] = useState([1, 2, 3, 4, 5, 6, 7].map(x => new Date(1, 2, 3, x)));
  const [appointmentTime, setAppointmentTime] = useState<string | null>(null);
  const [appointmentDuration, setAppointmentDuration] = useState<string | null>(null);
  const appointmentDurations = [15, 30, 45, 60];


  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value);
    setAppointmentTime((event.target as HTMLInputElement).value);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value);
    setAppointmentDuration((event.target as HTMLInputElement).value);
  };


  return (
    <Box display="flex" flexWrap="wrap">
      <Container
        maxWidth="xl"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <Grid container>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{ backgroundColor: "white" }}
          >
            <ExtendedTypography text="Select date" variant="h3" align="center" />
            <Box display="flex" justifyContent="center">
              <DatePicker unavailableDates={unavailableDates} />
            </Box>
          </Grid>
          <Grid container
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{ backgroundColor: "white" }}
            display="flex"
            alignContent="space-evenly"
            justifyContent="center"
          >
            <Grid display="flex" justifyContent="center">
              <Box>
                <ExtendedTypography text="Select duration" variant="h3" align="center" />
                <DurationPicker appointmentDurations={appointmentDurations} onChange={handleDurationChange} />
              </Box>
            </Grid>
            <Grid display="flex" justifyContent="center">
              <Box>
                <ExtendedTypography text="Select time" variant="h3" align="center" />
                <TimePicker availableAppointments={availableTimes} handleChange={handleTimeChange} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentPicker;
