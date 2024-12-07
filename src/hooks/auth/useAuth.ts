import { useRecoilState } from "recoil";
import { authState } from "../../atoms/authAtom";

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const login = (token: string) => {
    localStorage.setItem("userToken", token);
    setAuth({ isAuthenticated: true, token });
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setAuth({ isAuthenticated: false, token: "" });
  };

  const initializeAuth = () => {
    const userToken = localStorage.getItem("userToken");
    // 임시 검증 로직
    if (userToken === "OK") {
      setAuth({ isAuthenticated: true, token: userToken });
    } else {
      setAuth({ isAuthenticated: false, token: "" });
    }

    // if (userToken===???) {
    //   setAuth({ isAuthenticated: true, token: userToken });
    // } else {
    //   setAuth({ isAuthenticated: false, token: "" });
    // }
  };

  return { auth, login, logout, initializeAuth };
};

export default useAuth;
