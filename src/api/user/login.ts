import customAxios from "..";

interface LoginResponse {
  message?: string; // 실패 시 메시지
  errorCode?: number; // 실패 시 오류 코드
  data?: {
    accessToken: string;
    refreshToken: string;
  };
  status: string;
}

export const loginUser = async (email: string, password: string) => {
  try {
    const credentials = `${email}:${password}`;
    const base64Credentials = btoa(credentials);

    const headers = {
      Authorization: `Basic ${base64Credentials}`,
    };

    const res = await customAxios.post<LoginResponse>(
      "/auth/login",
      {},
      {
        headers,
        validateStatus: (status) => {
          return (status >= 200 && status < 300) || status === 401;
        },
      }
    );

    // console.log("처음에 오는 값:", res.data); // 응답 데이터 처리

    // 서버 응답에서 상태를 확인
    if (res.data.status === "success" && res.data.data) {
      const { accessToken, refreshToken } = res.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      //console.log("로그인 성공:", { accessToken, refreshToken });
      return { status: "success", accessToken, refreshToken };
    }

    // 실패한 응답 그대로 반환
    if (res.data.status === "error") {
      //console.log("실패한 응답:", res.data);
      return res.data; // 실패한 응답 그대로 반환
    }
  } catch {
    // 그 외의 에러는 그대로 출력
    // console.log(e);
    return { message: "알 수 없는 오류 발생", status: "error" };
  }
};
