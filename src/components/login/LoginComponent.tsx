import { Box, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animation-login.json";
import CommonInput from "../common/CommonInput";
import useLogin from "../../hooks/auth/useLogin";

const LoginComponent = () => {
  const { email, setEmail, password, setPassword, error, handleLogin } =
    useLogin();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #021b31, #90caf9)",
        color: "#fff",
        padding: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={loginAnimation} loop autoplay />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{ mb: 3, fontWeight: "bold", color: "black" }}
        >
          로그인
        </Typography>

        <CommonInput
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 3, width: "60%" }}
        />
        <CommonInput
          type="password"
          placeholder="패스워드를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3, width: "60%" }}
        />

        {error && (
          <Typography variant="body2" sx={{ color: "red", mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            width: "55%",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ width: "48%" }}
          >
            로그인
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("회원가입 페이지로 이동")}
            sx={{ width: "48%" }}
          >
            회원가입
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
