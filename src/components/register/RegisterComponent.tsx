import { Box, Button, Typography } from "@mui/material";
import CommonInput from "../common/CommonInput";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/Animation-register.json";

const RegisterComponent = () => {
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
        <Lottie animationData={registerAnimation} loop autoplay />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          background: "rgba(255, 255, 255, 0.7)",
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "black" }}
        >
          회원가입
        </Typography>

        <CommonInput
          type="text"
          placeholder="이름을 입력하세요"
          sx={{ mb: 3, width: "80%" }}
        />
        <Box
          sx={{ display: "flex", alignItems: "center", width: "80%", mb: 3 }}
        >
          <CommonInput
            type="email"
            placeholder="이메일을 입력하세요"
            sx={{ flex: 1, mr: 2 }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => console.log("이메일 중복 체크")}
            sx={{
              fontSize: "0.9rem",
              padding: "8px 16px",
              background: "#4caf50",
              "&:hover": {
                background: "#388e3c",
              },
            }}
          >
            중복 확인
          </Button>
        </Box>

        <CommonInput
          type="password"
          placeholder="암호를 입력하세요"
          sx={{ mb: 3, width: "80%" }}
        />
        <CommonInput
          type="password"
          placeholder="암호를 확인하세요"
          sx={{ mb: 3, width: "80%" }}
        />

        <CommonInput
          type="tel"
          placeholder="전화번호를 입력하세요"
          sx={{ mb: 3, width: "80%" }}
        />

        <Box
          sx={{ display: "flex", alignItems: "center", width: "80%", mb: 3 }}
        >
          <CommonInput
            type="text"
            placeholder="인증번호를 입력하세요"
            sx={{ flex: 1, mr: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("인증번호 발송")}
            sx={{
              fontSize: "0.9rem",
              padding: "8px 16px",
              background: "#1e88e5",
              "&:hover": {
                background: "#1565c0",
              },
            }}
          >
            인증번호 발송
          </Button>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("회원가입")}
          sx={{
            width: "80%",
            fontSize: "1rem",
            padding: "10px",
            background: "#1e88e5",
            "&:hover": {
              background: "#1565c0",
            },
          }}
        >
          회원가입
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterComponent;
