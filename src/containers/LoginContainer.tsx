import { Box } from "@mui/material";
import LoginComponent from "../components/login/loginComponent";

const LoginContainer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 9.5,
      }}
    >
      <LoginComponent />
    </Box>
  );
};

export default LoginContainer;
