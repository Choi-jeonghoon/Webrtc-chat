import customAxios from "..";
import { RegisterUserInput } from "../../types/user/auth";

// 이메일과 비밀번호를 Base64로 인코딩하는 함수
function encodeToBase64(email: string, password: string): string {
  return btoa(`${email}:${password}`);
}

// 회원가입 요청 함수
export const registerUser = async ({
  email,
  password,
  phoneNumber,
  name,
}: RegisterUserInput) => {
  const token = encodeToBase64(email, password);

  try {
    const response = await customAxios.post(
      "/auth/register",
      {
        phoneNumber,
        name,
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response.data; // 성공적으로 데이터를 반환
  } catch (e) {
    return Promise.reject(e); // 실패 시 에러를 반환
  }
};
