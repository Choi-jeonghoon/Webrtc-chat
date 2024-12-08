import { Box } from "@mui/material";
import { LayoutProps } from "../../types/LayoutType";

const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "98vh",
      }}
    >
      {children}
    </Box>
  );
};

export default LayoutPage;
