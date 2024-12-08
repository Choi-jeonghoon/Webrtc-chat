import { Box } from "@mui/material";
import { LayoutProps } from "../../types/LayoutType";

const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 9.5,
      }}
    >
      {children}
    </Box>
  );
};

export default LayoutComponent;
