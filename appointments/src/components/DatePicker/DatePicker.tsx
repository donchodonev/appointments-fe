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
      <CalendarPicker
        date={date}
        onChange={(newDate) => setDate(newDate as Date)}
        shouldDisableDate={disableUnavailableDates}
        disablePast={true}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
