import { useState } from "react";
import { checkEmail } from "../../api/user/findEmail";

const useEmailCheck = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // 중복 확인 버튼 비활성화 상태
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null); // 이메일 중복 체크 결과

  const handleEmailCheck = async (email: string) => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    setIsButtonDisabled(true); // 버튼 비활성화 (중복 확인 중)
    try {
      const result = await checkEmail(email);

      // 서버 응답에서 status 값과 errorCode를 확인
      if (result.status === "success") {
        setIsEmailValid(true);
        alert("사용 가능한 이메일입니다.");
      } else if (result.status === "error" && result.errorCode === 409) {
        // 이메일 중복인 경우 처리
        setIsEmailValid(false);
        alert("이미 사용 중인 이메일입니다.");
      }
    } catch {
      // catch 블록에서 서버 오류 처리
      setIsEmailValid(false);
      alert("서버 오류가 발생했습니다.");
    } finally {
      //성공하면 버튼 비활성화
      setIsButtonDisabled(isEmailValid === true);
    }
  };

  return { isButtonDisabled, isEmailValid, handleEmailCheck };
};

export default useEmailCheck;
