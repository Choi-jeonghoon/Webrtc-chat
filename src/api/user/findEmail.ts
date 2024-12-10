import customAxios from "..";
import { AxiosError } from "axios";

export const checkEmail = async (email: string) => {
  try {
    const response = await customAxios.post("/user/check-email", {
      email: email,
    });
    console.log(response.data); // 응답 데이터 처리

    // 서버 응답에서 상태를 확인
    if (response.data.status === "success") {
      console.log("사용 가능한 이메일입니다.");
      return response.data; // 성공적인 응답만 반환
    }

    // status가 success가 아닌 경우 처리
    console.log("이미 사용 중인 이메일입니다.");
    return response.data; // 실패한 응답도 반환
  } catch (e: unknown) {
    // e가 AxiosError 타입인지 확인
    if (e instanceof AxiosError) {
      // 서버에서 던진 에러를 처리
      const errorCode =
        e.response?.status || e.response?.data?.errorCode || 500;
      const errorMessage = e.response?.data?.message || "알 수 없는 오류 발생";

      // 409 Conflict 에러는 처리하지 않도록 수정
      if (errorCode === 409) {
        // 이메일 중복인 경우, 서버에서 받은 메시지를 그대로 반환
        return { status: "error", message: "이미 사용 중인 이메일입니다." };
      }

      // 다른 에러 코드에 대해서만 처리
      console.error(`Error ${errorCode}: ${errorMessage}`);
      return Promise.reject(new Error(errorMessage)); // 다른 오류는 여전히 에러 반환
    } else {
      // 만약 e가 AxiosError가 아니면 다른 오류 처리
      console.error("알 수 없는 오류 발생", e);
      return Promise.reject(new Error("알 수 없는 오류 발생"));
    }
  }
};
