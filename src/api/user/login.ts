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
        withCredentials: true, // 쿠키 자동 포함 설정
      }
    );

    // 서버 응답에서 상태를 확인
    if (res.data.status === "success") {
      return { status: "success" }; // 쿠키는 자동으로 관리되므로 클라이언트에서 가져올 필요 없음
    }

    // 실패한 응답 그대로 반환
    if (res.data.status === "error") {
      return res.data;
    }
  } catch {
    return { message: "알 수 없는 오류 발생", status: "error" };
  }
};
