import CommonHeader from "../components/common/CommonHearder";
import HomeContainer from "../containers/HomeContainer";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <CommonHeader />
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
