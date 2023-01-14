import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { isEqual } from "date-fns";
import { generateKey } from "../utils/keyGenerator";

const Home: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const unavailableDatesReturnedFromApi = [
    new Date(2023, 0, 17),
    new Date(2023, 1, 2),
  ] as Date[];

  const disableUnavailableDates = (date: Date): boolean =>
    unavailableDatesReturnedFromApi.some((unavailableDate) =>
      isEqual(unavailableDate, date)
    );

  const [availableTimes, setAvailableTimes] = useState([
    new Date(2023, 0, 18, 11),
    new Date(2023, 0, 18, 12),
  ]);

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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
              date={date}
              onChange={(newDate) => {
                setDate(newDate as Date);
                setAvailableTimes(
                  availableTimes.map((time) => {
                    time.setDate(newDate?.getDate() as number);
                    time.setHours((time?.getHours() as number) + 1);
                    return time;
                  })
                );
              }}
              shouldDisableDate={disableUnavailableDates}
              disablePast={true}
            />
          </LocalizationProvider>
        </Grid>
        <Grid xs={6} style={{ backgroundColor: "white" }}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Available hours
            </FormLabel>
            <RadioGroup row>
              {availableTimes.map((time) => (
                <FormControlLabel
                  key={generateKey()}
                  value={time.toTimeString()}
                  control={<Radio />}
                  label={time.toTimeString()}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
