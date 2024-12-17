import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useHandle = () => {
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 상태
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 비밀번호 확인 보이기 상태
  const [isVerificationVisible, setVerificationVisible] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/register");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSendVerification = () => {
    setVerificationVisible(true); // 인증번호 입력 필드 표시
    setVerificationSent(true); // 버튼 텍스트 변경
    console.log("인증번호 발송");
  };

  const handleVerifyCode = () => {
    console.log("인증번호 확인");
  };

  return {
    handleLogin,
    handleSignup,
    handleHome,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    showPassword,
    showConfirmPassword,
    isVerificationVisible,
    verificationSent,
    handleSendVerification,
    handleVerifyCode,
  };
};

export default useHandle;
