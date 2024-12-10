import { useState } from "react";
import { checkEmail } from "../../api/user/findEmail";

const useEmailCheck = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // 중복 확인 버튼 비활성화 상태
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null); // 이메일 중복 체크 결과
  const [emailError, setEmailError] = useState<boolean | null>(null); // 이메일 형식 에러 메시지

  // 이메일 형식 검증을 위한 정규 표현식
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailCheck = async (email: string) => {
    // 이메일 형식이 올바른지 클라이언트에서 체크
    if (!emailRegex.test(email)) {
      setEmailError(false);
      setIsEmailValid(false);
      alert("이메일 형식이 잘못되었습니다.");
      return; // 이메일 형식이 잘못되었으면 서버 요청을 보내지 않음
    }

    setEmailError(null); // 이메일 형식 오류가 없으면 오류 메시지 제거
    setIsButtonDisabled(true); // 버튼 비활성화 (중복 확인 중)

    try {
      const result = await checkEmail(email); // API 호출

      if (result.status === "success") {
        setIsEmailValid(true);
        setIsButtonDisabled(true); // 버튼 비활성화
        alert("사용 가능한 이메일입니다.");
      } else if (result.status === "error" && result.errorCode === 409) {
        setIsEmailValid(false);
        alert("이미 사용 중인 이메일입니다.");
      }
    } catch {
      setIsEmailValid(false);
      alert("서버 오류가 발생했습니다.");
    } finally {
      setIsButtonDisabled(isEmailValid === true);
    }
  };

  return { isButtonDisabled, isEmailValid, emailError, handleEmailCheck };
};

export default useEmailCheck;
