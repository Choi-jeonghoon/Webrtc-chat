import { Box, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animation-login.json";
import CommonInput from "../common/CommonInput";

const LoginComponent = () => {
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
          label="이메일"
          type="email"
          placeholder="이메일을 입력하세요"
          sx={{ mb: 3, width: "60%" }}
        />
        <CommonInput
          label="패스워드"
          type="password"
          placeholder="패스워드를 입력하세요"
          sx={{ mb: 3, width: "60%" }}
        />

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
            onClick={() => console.log("로그인 클릭")}
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
