import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomLoader from "../components/loader/customLoader";
import { PrivateRouter } from "./PrivateRoutes";
import CommonHeader from "../components/common/CommonHearder";

const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const VideoChatPage = lazy(() => import("../pages/VideoChatPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

export const PublicRouter = () => {
  return (
    <Suspense fallback={<CustomLoader />}>
      <BrowserRouter>
        <CommonHeader />
        <Routes>
          {/* 홈 페이지는 public한 라우트로 설정 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 특정 경로는 PrivateRouter를 통해 인증된 사용자만 접근 */}
          <Route
            path="/video-chat"
            element={
              <PrivateRouter>
                <VideoChatPage />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
