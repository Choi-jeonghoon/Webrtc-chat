import { useState } from "react";
import { registerUser } from "../../api/user/register";

import { useRecoilState } from "recoil";
import {
  isModalOpenState,
  modalMessageState,
} from "../../recoli/atoms/modalState";

const useRegister = () => {
  //입력 상태관리
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  //모달 상태관리
  const [, setModalMessage] = useRecoilState(modalMessageState);
  const [, setIsModalOpen] = useRecoilState(isModalOpenState);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !phoneNumber) {
      setModalMessage("모든 필드를 입력해주세요.");
      setIsModalOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setModalMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setIsModalOpen(true);
      return;
    }

    try {
      await registerUser({
        email,
        password,
        phoneNumber,
        name,
      });
      setModalMessage("회원가입이 성공적으로 완료되었습니다!");
      setIsModalOpen(true); // 성공 시 모달 표시
    } catch (err) {
      console.error("회원가입 실패:", err);
      setModalMessage("회원가입에 실패했습니다. 다시 시도해주세요.");
      setIsModalOpen(true); // 실패 시 모달 표시
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    phoneNumber,
    setPhoneNumber,
    handleRegister,
    setIsModalOpen,
  };
};

export default useRegister;
