import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { PropsWithChildren } from "react"
import IDurationPicker from "./IDurationPicker";


const DurationPicker: React.FC<PropsWithChildren<IDurationPicker>> = (props) => {

    const { appointmentDurations, onChange } = props;

    return (
        <RadioGroup onChange={onChange}>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {appointmentDurations.map((duration, index) => (
                    <FormControlLabel
                        key={index}
                        value={duration}
                        control={<Radio />}
                        label={duration + ' minutes'}
                    />
                ))}
            </Box>
        </RadioGroup>
    )
}

export default DurationPicker;