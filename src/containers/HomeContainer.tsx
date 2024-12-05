import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();

  // 화상 상담 시작 핸들러
  const handleStartChat = async () => {
    navigate("/video-chat");
  };
  const handleLogin = async () => {
    navigate("/login");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        WebRTC 화상 플랫폼
      </Typography>
      <Button variant="contained" color="primary" onClick={handleStartChat}>
        화상 시작하기
      </Button>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        로그인
      </Button>
    </Container>
  );
};

export default HomeContainer;
