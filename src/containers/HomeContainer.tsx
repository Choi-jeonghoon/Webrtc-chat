import { Box } from "@mui/material";
import HomeComponent from "../components/home/HomeComponent";

const HomeContainer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 9.5,
      }}
    >
      <HomeComponent />
    </Box>
  );
};

export default HomeContainer;
