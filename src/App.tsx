import { ThemeProvider, createTheme } from "@mui/material";
import { PublicRouter } from "./routes/PublicRoutes.tsx";
import CustomErrorBoundary from "./components/error/CustomErrorBoundary.tsx";
import { RecoilRoot } from "recoil";

const theme = createTheme(); // MUI의 테마를 생성하여 모든 컴포넌트에 적용

const App = () => {
  return (
    // 전체 앱에 MUI 테마 적용
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        {/* 에러 발생 시 오류 화면을 커스터마이징하기 위한 Error Boundary */}
        <CustomErrorBoundary>
          {/* 애플리케이션의 모든 라우트를 여기서 처리 */}
          <PublicRouter />
        </CustomErrorBoundary>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
