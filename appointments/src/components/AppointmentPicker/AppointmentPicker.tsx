import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TimePicker from "../../components/TimePicker/TimePicker";
import DatePicker from "../../components/DatePicker/DatePicker";
import { useState } from "react";
import { getWeather } from "../../api/test";
import { Box } from "@mui/system";

getWeather().then((res) => res);

const AppointmentPicker: React.FC = () => {
  const [unavailableDates, setUnavailableDates] = useState([] as Date[]);
  const [availableTimes, setAvailableTimesDates] = useState([
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
  ]);

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
            <Typography variant="h3" align="center">
              Select a date
            </Typography>
            <Box display="flex" justifyContent="center">
              <DatePicker unavailableDates={unavailableDates} />
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{ backgroundColor: "white" }}
          >
            <Typography variant="h3" align="center">
              Select time
            </Typography>
            <Box display="flex" justifyContent="center">
              <TimePicker availableAppointments={availableTimes} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentPicker;
