import { atom } from "recoil";
import { AuthState } from "../../types/user/auth";

// sessionStorage에 저장된 값이 있으면 해당 값을 사용
const storedToken = sessionStorage.getItem("accessToken");

export const authState = atom<AuthState>({
  key: "authState", // 고유한 키
  default: {
    isAuthenticated: storedToken ? true : false, // 토큰이 있으면 인증됨
    token: storedToken || "", // 토큰 값
  },
});
