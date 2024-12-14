import customAxios from "..";

interface LoginResponseSuccess {
  accessToken: string;
  status: "success";
}

interface LoginResponseError {
  message: string;
  errorCode?: number;
  status: "error";
}

type LoginResponse = LoginResponseSuccess | LoginResponseError;

//로그인 API
export const login = async (
  email: string,
  password: string
): Promise<LoginResponse | undefined> => {
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

    if (res.data.status === "success") {
      const { accessToken } = res.data;
      // 세션스토리지 -> 로컬스토리지로 변경
      localStorage.setItem("accessToken", accessToken); // 변경된 부분

      console.log(
        "로컬스토리지에 저장된 액세스 토큰:",
        localStorage.getItem("accessToken") // 변경된 부분
      );

      return { status: "success", accessToken };
    }

    if (res.data.status === "error") {
      return res.data; // 에러 메시지 반환
    }
  } catch (error) {
    console.error("로그인 오류:", error);
    return { message: "알 수 없는 오류 발생", status: "error" };
  }
};

// // 리프레쉬 토큰을 통해 액세스토큰 갱신 API
// export const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (!refreshToken) {
//       throw new Error("리프레시 토큰이 없습니다.");
//     }

//     const response = await customAxios.post("/auth/refresh", {
//       refreshToken,
//     });

//     // 새 액세스 토큰 저장
//     const { accessToken } = response.data;
//     localStorage.setItem("accessToken", accessToken);
//     return accessToken;
//   } catch (error) {
//     console.error("리프레시 토큰 갱신 실패:", error);
//     return null;
//   }
// };
