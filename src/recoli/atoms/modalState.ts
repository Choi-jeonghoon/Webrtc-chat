import { atom } from "recoil";

// 모달 메시지 상태
export const modalMessageState = atom<string>({
  key: "modalMessageState",
  default: "",
});

// 모달 열림/닫힘 상태
export const isModalOpenState = atom<boolean>({
  key: "isModalOpenState",
  default: false,
});
