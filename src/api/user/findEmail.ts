import customAxios from "..";

export const checkEmail = async (email: string) => {
  try {
    const response = await customAxios.post("/user/check-email", {
      email: email,
    });
    console.log(response.data); // 응답 데이터 처리
    return response.data;
  } catch (e) {
    console.error("Error:", e); // 에러 처리
    return Promise.reject(e); // 실패 시 에러를 반환
  }
};
