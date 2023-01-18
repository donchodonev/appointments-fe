import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TimePicker from "../../components/TimePicker/TimePicker";
import DatePicker from "../../components/DatePicker/DatePicker";
import { useState } from "react";
import { getWeather } from "../../api/test";

getWeather().then((res) => res);

const AppointmentPicker: React.FC = () => {
  const [unavailableDates, setUnavailableDates] = useState([] as Date[]);
  const [availableTimes, setAvailableTimesDates] = useState([] as Date[]);

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundColor: "black",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <Grid container>
        <Grid xs={6} style={{ backgroundColor: "white" }}>
          <DatePicker unavailableDates={unavailableDates} />
        </Grid>
        <Grid xs={6} style={{ backgroundColor: "white" }}>
          <TimePicker availableAppointments={availableTimes} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentPicker;
