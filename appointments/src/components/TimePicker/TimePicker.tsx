import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { format } from "date-fns";
import { PropsWithChildren, useState } from "react";
import ITimePickerProps from "./ITimePickerProps";

const TimePicker: React.FC<PropsWithChildren<ITimePickerProps>> = (props) => {
  const { availableAppointments } = props;
  const [radioOptions, setRadioOptions] = useState(
    availableAppointments.map((time, index) => (
      <FormControlLabel
        key={index}
        value={time}
        control={<Radio />}
        label={format(time, "HH:mm")}
        onChange={(e) => {
          (e as React.ChangeEvent<HTMLInputElement>).target.checked = true;
          setRadioOptions(
            radioOptions.map((x) => {
              if (x.props.checked === true) {
                x.props.checked = true;
                console.log(x.props);
              }
              return x;
            })
          );
        }}
      />
    ))
  );

  return (
    <FormControl>
      <RadioGroup
        onChange={(e, v) => {
          e.target.checked = true;
        }}
      >
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {radioOptions}
        </Box>
      </RadioGroup>
    </FormControl>
  );
};
export default TimePicker;
