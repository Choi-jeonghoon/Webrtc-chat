import IconButton from "@mui/material/IconButton";

interface IconButtonProps {
  onClick: () => void;
  position?: { top: number; right: number }; // 기본적인 위치 조정
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  children: React.ReactNode;
}

const CloseIconButton = ({
  onClick,
  position = { top: 8, right: 25 },
  color = "inherit",
  ...props
}: IconButtonProps) => {
  return (
    <IconButton
      edge="end"
      color={color}
      onClick={onClick}
      aria-label="close"
      sx={{
        position: "absolute",
        right: position.right,
        top: position.top,
      }}
      {...props}
    >
      {props.children}
    </IconButton>
  );
};

export default CloseIconButton;
