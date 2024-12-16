import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

import IconCustom from "../customIcon/IconComponent";
import useAuth from "../../hooks/auth/useAuth";
import useHandle from "../../hooks/common/useHandle";

const CommonHeader = () => {
  const { auth, handleLogout } = useAuth(); // 커스텀 훅 사용
  const { handleLogin, handleSignup, handleHome } = useHandle();

  return (
    <AppBar color="primary" sx={{ px: 2 }}>
      <Toolbar>
        <IconCustom
          onClick={handleHome}
          edge="start"
          color="inherit"
          sx={{ mr: 1 }}
        >
          <VideoCallIcon fontSize="large" />
        </IconCustom>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          화상 서비스
        </Typography>

        <>
          {auth.isAuthenticated ? (
            <>
              <Button
                startIcon={<LogoutIcon />}
                color="inherit"
                onClick={handleLogout}
                sx={{ mr: 1 }}
              >
                로그아웃
              </Button>
              <Button
                startIcon={<AccountCircleIcon />}
                color="inherit"
                onClick={() => console.log("마이페이지")}
                sx={{ mr: 2 }}
              >
                마이페이지
              </Button>
            </>
          ) : (
            <>
              <Button
                startIcon={<LoginIcon />}
                color="inherit"
                onClick={handleLogin}
                sx={{ mr: 1 }}
              >
                로그인
              </Button>
              <Button
                startIcon={<AccountCircleIcon />}
                color="inherit"
                onClick={handleSignup}
                sx={{ mr: 2 }}
              >
                회원가입
              </Button>
            </>
          )}
        </>
      </Toolbar>
    </AppBar>
  );
};

export default CommonHeader;
