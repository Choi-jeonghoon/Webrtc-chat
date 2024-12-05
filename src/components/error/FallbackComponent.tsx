import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FallbackProps } from "react-error-boundary";

const IS_DEV_MODE = true;

const FallbackComponent = ({ error }: FallbackProps) => {
  useEffect(() => {
    if (IS_DEV_MODE) {
      console.log(error);
    }
  }, [error]); // 의존성 배열 추가 -> error 값이 변경될 때만 실행되도록 함

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        에러가 발생했습니다.
      </Typography>
    </Box>
  );
};

export default FallbackComponent;
