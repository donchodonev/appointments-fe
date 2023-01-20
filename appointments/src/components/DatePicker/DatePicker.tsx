import { Box } from "@mui/material";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { isEqual } from "date-fns";
import { PropsWithChildren, useState } from "react";
import IDateTimePickerProps from "./IDateTimePickerProps";

const DatePicker: React.FC<PropsWithChildren<IDateTimePickerProps>> = (
  props
) => {
  const { unavailableDates } = props;

  const [date, setDate] = useState(new Date());

  const disableUnavailableDates = (date: Date): boolean =>
    unavailableDates.some((unavailableDate) => isEqual(unavailableDate, date));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box boxShadow={2} m={2}>
      <CalendarPicker
        date={date}
        onChange={(newDate) => setDate(newDate as Date)}
        shouldDisableDate={disableUnavailableDates}
        disablePast={true}
      />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePicker;
