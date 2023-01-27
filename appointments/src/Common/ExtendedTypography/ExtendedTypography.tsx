import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { IExtendedTypographyProps } from "./IExtendedTypographyProps";

const ExtendedTypography: React.FC<PropsWithChildren<IExtendedTypographyProps>> = (props) => {

    const { variant, align, text } = props;

    return (
        <Typography variant={variant} align={align}>{text}</Typography>
    )
}

export default ExtendedTypography;