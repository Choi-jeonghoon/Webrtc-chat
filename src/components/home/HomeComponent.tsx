import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import videoAnimation from "../../assets/Animation-earth.json";

const HomeComponent = () => {
  const navigate = useNavigate();

  const handleStartChat = async () => {
    navigate("/video-chat");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #021b31, #90caf9)",
        color: "#fff",
        textAlign: "center",
        minHeight: "10rem",
        padding: 2,
        borderRadius: 2,
      }}
    >
      {/* Lottie Animation */}
      <Box
        sx={{
          mb: 5,
          width: { xs: "70%", sm: "50%", md: "30%" },
          maxWidth: 500,
        }}
      >
        <Lottie animationData={videoAnimation} loop autoplay />
      </Box>

      {/* Title */}
      <Typography variant="h3" gutterBottom sx={{ color: "black" }}>
        WebRTC 화상 플랫폼
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: "black" }}>
        실시간 고화질 영상 통화와 간편한 연결을 제공합니다.
      </Typography>

      {/* Start Chat Button */}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleStartChat}
        sx={{
          px: 4,
          py: 2,
          fontSize: { xs: "1rem", md: "1.2rem" },
          background: "rgba(0,0,0,0.7)",
          "&:hover": { background: "rgba(0,0,0,0.9)" },
        }}
      >
        화상 시작하기
      </Button>
    </Box>
  );
};

export default HomeComponent;
