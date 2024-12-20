import { Box, Button, Typography } from "@mui/material";
import CommonInput from "../common/CommonInput";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/Animation-register.json";
import { useState } from "react";

const RegisterComponent = () => {
  const [isVerificationVisible, setVerificationVisible] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 상태
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 비밀번호 확인 보이기 상태

  const handleSendVerification = () => {
    setVerificationVisible(true); // 인증번호 입력 필드 표시
    setVerificationSent(true); // 버튼 텍스트 변경
    console.log("인증번호 발송");
  };

  const handleVerifyCode = () => {
    console.log("인증번호 확인");
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

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
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력하세요"
          showPasswordToggle={true}
          onClick={handleClickShowPassword}
          sx={{ mb: 3, width: "80%" }}
        />

        <CommonInput
          type={showConfirmPassword ? "text" : "password"}
          placeholder="비밀번호를 확인하세요"
          showPasswordToggle={true}
          onClick={handleClickShowConfirmPassword}
          sx={{ mb: 3, width: "80%" }}
        />

        <Box
          sx={{ display: "flex", alignItems: "center", width: "80%", mb: 3 }}
        >
          <CommonInput
            type="tel"
            placeholder="전화번호를 입력하세요"
            sx={{ flex: 1, mr: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendVerification}
            sx={{
              fontSize: "0.9rem",
              padding: "8px 16px",
              background: "#1e88e5",
              "&:hover": {
                background: "#1565c0",
              },
            }}
          >
            {verificationSent ? "인증번호 재발송" : "인증번호 발송"}
          </Button>
        </Box>

        {isVerificationVisible && (
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
              onClick={handleVerifyCode}
              sx={{
                fontSize: "0.9rem",
                padding: "8px 16px",
                background: "#4caf50",
                "&:hover": {
                  background: "#388e3c",
                },
              }}
            >
              인증번호 확인
            </Button>
          </Box>
        )}

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
