import { TypographyProps } from "@mui/material";

export interface ITextProps {
  text: string;
}

export interface IExtendedTypographyProps extends ITextProps, TypographyProps {}
