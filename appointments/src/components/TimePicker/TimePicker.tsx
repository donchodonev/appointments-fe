import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { format } from "date-fns";
import { PropsWithChildren } from "react";
import ITimePickerProps from "./ITimePickerProps";

const TimePicker: React.FC<PropsWithChildren<ITimePickerProps>> = (props) => {
  const { availableAppointments, handleChange } = props;
  return (
    <FormControl>
      <RadioGroup
        onChange={handleChange}
      >
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {availableAppointments.map((time, index) => (
            <FormControlLabel
              key={index}
              value={format(time, "HH:mm")}
              control={<Radio />}
              label={format(time, "HH:mm")}
            />
          ))}
        </Box>
      </RadioGroup>
    </FormControl>
  );
};
export default TimePicker;
