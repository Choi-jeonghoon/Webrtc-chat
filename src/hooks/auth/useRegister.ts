import { useEffect, useState } from "react";
import { registerUser } from "../../api/user/register";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  //입력 상태관리
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  //모달 상태관리
  const [modalMessage, setModalMessage] = useState<string>(""); // 모달 메시지 상태
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 열기/닫기 상태
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate

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

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 모달 열리고 1초 후에 자동으로 페이지 이동
  useEffect(() => {
    if (
      isModalOpen &&
      modalMessage === "회원가입이 성공적으로 완료되었습니다!"
    ) {
      const timer = setTimeout(() => {
        navigate("/"); // 홈 페이지로 이동
        closeModal(); // 모달 닫기
      }, 2000); // 2초 후에 이동

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, modalMessage, navigate]);

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
    modalMessage,
    isModalOpen,
    closeModal,
  };
};

export default useRegister;
