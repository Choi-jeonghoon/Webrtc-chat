import { Box } from "@mui/material";
import LoginContainer from "../containers/LoginContainer";

const LoginPage = () => {
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
        <LoginContainer />
      </Box>
    </>
  );
};

export default LoginPage;
