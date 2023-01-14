import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { isPast } from "date-fns";

const Home: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const futureUnavailableDatesReturnedFromApi = [] as Number[];
  const disableUnavailableDates = (date: Date): boolean =>
    futureUnavailableDatesReturnedFromApi.includes(date.getDate()) ||
    isPast(date);

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
        <Grid xs={6} style={{ backgroundColor: "yellow" }}>
          asdasd
        </Grid>
        <Grid xs={6} style={{ backgroundColor: "white" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
              date={date}
              onChange={(newDate) => setDate(newDate as Date)}
              shouldDisableDate={disableUnavailableDates}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
