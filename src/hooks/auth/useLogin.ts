import { useState } from "react";
import { loginUser } from "../../api/user/login";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError(null); // 에러 초기화

      // 이메일 형식 검사
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email || !emailRegex.test(email)) {
        setError("올바른 이메일 형식을 입력해주세요.");
        return;
      }

      if (!password) {
        setError("패스워드를 입력해주세요.");
        return;
      }

      // 로그인 시도
      const res = await loginUser(email, password);

      // 로그인 실패 처리
      if (!res) {
        setError("로그인에 실패했습니다."); // 실패 시 메시지 출력
        return;
      }

      // 로그인 성공 메시지
      alert("로그인 성공! 토큰이 저장되었습니다.");

      // 로그인 후 홈 화면으로 이동
      navigate("/");
    } catch {
      setError("서버와의 연결에 문제가 발생했습니다.");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
};

export default useLogin;
