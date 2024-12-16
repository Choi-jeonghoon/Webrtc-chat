import { useState } from "react";
import { login } from "../../api/user/login";
import { useNavigate } from "react-router-dom";
import { authState } from "../../atoms/authAtom";
import { useRecoilState } from "recoil";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [, setIsLogin] = useRecoilState(authState);
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
      const res = await login(email, password);
      //console.log("여기값:", res);

      // 로그인 성공
      if (res?.status === "success") {
        localStorage.setItem("accessToken", res.accessToken);
        // Recoil 상태 업데이트
        setIsLogin({
          isAuthenticated: true,
          token: res.accessToken,
        });
        alert("로그인 성공!");
        navigate("/");
        return;
      } else if (res?.status === "error") {
        alert("로그인 실패! ");
        return;
      }
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
