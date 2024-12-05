import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./auth/useAuth";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false); //모달창 여부
  const navigate = useNavigate();

  const { auth } = useAuth(); // useAuth에서 인증 상태 가져오기

  // 인증되지 않으면 모달을 열도록 설정
  useEffect(() => {
    if (!auth.isAuthenticated) {
      setOpenModal(true);
    }
  }, [auth.isAuthenticated]);

  //모달창 닫음
  //   const handleModalClose = () => {
  //     setOpenModal(false);
  //   };

  //확인
  const handleModalConfirm = () => {
    setOpenModal(false);
    navigate("/login");
  };

  //취소
  const handleCancel = () => {
    // 이전 페이지로 이동
    navigate(-1); // -1은 이전 페이지로 돌아가는 기능을 수행
  };

  return {
    openModal,
    // handleModalClose,
    handleModalConfirm,
    handleCancel,
  };
};

export default useModal;
