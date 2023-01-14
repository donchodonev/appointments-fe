import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { generateKey } from "../../utils/keyGenerator";
import ITimePickerProps from "./ITimePickerProps";

const TimePicker: React.FC<PropsWithChildren<ITimePickerProps>> = (props) => {
  const { availableAppointments } = props;

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Available hours
      </FormLabel>
      <RadioGroup row>
        {availableAppointments.map((time) => (
          <FormControlLabel
            key={generateKey()}
            value={time.toTimeString()}
            control={<Radio />}
            label={time.toTimeString()}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default TimePicker;
