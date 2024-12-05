import { atom } from "recoil";

export const authState = atom({
  key: "authState", // 각 atom은 고유한 key를 가져야 합니다.
  default: {
    isAuthenticated: false,
    token: "",
  },
});
