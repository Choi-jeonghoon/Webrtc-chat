import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import IconCustom from "../customIcon/IconComponent";

const CommonHeader = () => {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar color="primary" sx={{ px: 2 }}>
      <Toolbar>
        <IconCustom
          onClick={() => navigate("/")}
          edge="start"
          color="inherit"
          sx={{ mr: 1 }}
        >
          <VideoCallIcon fontSize="large" />
        </IconCustom>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          화상 서비스
        </Typography>

        {!auth.isAuthenticated ? (
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
        ) : (
          <Button
            startIcon={<LogoutIcon />}
            color="inherit"
            onClick={handleLogout}
          >
            로그아웃
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CommonHeader;
