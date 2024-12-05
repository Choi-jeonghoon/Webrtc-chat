import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

const LoginContainer = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // "OK"라는 임시 토큰 사용
    login("OK");
    navigate("/"); // 로그인 후 홈으로 이동
  };

  return (
    <div>
      <h1>로그인</h1>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginContainer;
