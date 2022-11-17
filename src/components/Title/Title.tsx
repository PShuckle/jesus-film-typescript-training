import { Typography } from "@mui/material";
import { ReactElement } from "react";

export interface TitleProps {
  fontSize: number;
  label?: string;
}

export const Title = ({
  fontSize,
  label = "To Do App",
}: TitleProps): ReactElement => {
  return (
    <Typography variant="h1" fontSize={fontSize}>
      {label}
    </Typography>
  );
};

// export default Title
