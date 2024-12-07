import HomeContainer from "../containers/HomeContainer";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "98vh",
        }}
      >
        <HomeContainer />
      </Box>
    </>
  );
};

export default HomePage;
