import { SxProps, Theme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

interface IconButtonProps {
  onClick: () => void;
  position?: { top?: number; right?: number; left?: number }; // 기본적인 위치 조정
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  edge?: "end" | "start";
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

const IconCustom = ({
  onClick,
  edge = "end",
  position = { top: 0, right: 0, left: 0 },
  color = "inherit",
  sx,
  ...props
}: IconButtonProps) => {
  return (
    <IconButton
      edge={edge}
      color={color}
      onClick={onClick}
      aria-label="close"
      sx={{
        top: position.top,
        right: position.right,
        left: position.left,
        ...sx,
      }}
      {...props}
    >
      {props.children}
    </IconButton>
  );
};

export default IconCustom;
