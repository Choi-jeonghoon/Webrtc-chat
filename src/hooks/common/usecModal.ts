import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useModalRedirect = (
  isModalOpen: boolean,
  modalMessage: string,
  closeModal: () => void
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      isModalOpen &&
      modalMessage === "회원가입이 성공적으로 완료되었습니다!"
    ) {
      const timer = setTimeout(() => {
        closeModal(); // 모달 닫기
        navigate("/"); // 홈 페이지로 이동
      }, 2000); // 2초 후에 이동

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, modalMessage, navigate, closeModal]);
};

export default useModalRedirect;
