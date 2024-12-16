import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { authState } from "../../atoms/authAtom";
import { useNavigate } from "react-router-dom";

//  로그아웃 및 상태 복구 로직을 관리하는 커스텀 훅
const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();

  // 세션에서 토큰 복구하여 상태 초기화
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAuth({
        isAuthenticated: true,
        token: storedToken,
      });
    } else {
      setAuth({
        isAuthenticated: false,
        token: "",
      });
    }
  }, [setAuth]);

  // 로그아웃 처리
  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      token: "",
    });
    localStorage.removeItem("accessToken");
    navigate("/"); // 홈으로 리디렉션
  };

  return {
    auth,
    handleLogout,
  };
};

export default useAuth;
