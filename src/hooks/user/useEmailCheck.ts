import { useState } from "react";
import { checkEmail } from "../../api/user/findEmail";
import { useRecoilState } from "recoil";
import {
  isModalOpenState,
  modalMessageState,
} from "../../recoli/atoms/modalState";

const useEmailCheck = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false); // 중복 확인 버튼 비활성화 상태
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null); // 이메일 중복 체크 결과

  //모달 상태관리
  const [, setModalMessage] = useRecoilState(modalMessageState);
  const [, setIsModalOpen] = useRecoilState(isModalOpenState);

  const handleEmailCheck = async (email: string) => {
    // 이메일 형식 검증을 위한 정규 표현식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 이메일 형식이 올바른지 클라이언트에서 체크
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      setIsModalOpen(true);

      setModalMessage("이메일 형식이 잘못되었습니다.");
      console.log("이메일 형식이 잘못됨");
      return; // 이메일 형식이 잘못되었으면 서버 요청을 보내지 않음
    }

    try {
      const result = await checkEmail(email); // API 호출

      if (result.status === "success") {
        setIsEmailValid(true);
        setIsModalOpen(true);
        setModalMessage("사용 가능한 이메일입니다.");
        setIsButtonDisabled(true); // 버튼 비활성화
        console.log(isButtonDisabled, "버튼 비활성화");
        console.log("사용 가능한 이메일입니다");
      } else if (result.status === "error" && result.errorCode === 409) {
        setIsEmailValid(false);
        setIsModalOpen(true);
        setModalMessage("이미 사용 중인 이메일입니다.");
        console.log("이미 사용 중인 이메일입니다.");
      }
    } catch {
      setIsEmailValid(false);
      setModalMessage("서버 오류가 발생했습니다.");
    } finally {
      setIsModalOpen(true);
    }
  };

  return {
    isButtonDisabled,
    isEmailValid,
    handleEmailCheck,
    // modalMessage,
    // isModalOpen,
  };
};

export default useEmailCheck;
