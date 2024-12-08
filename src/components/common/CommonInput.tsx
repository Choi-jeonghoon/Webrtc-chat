import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface CommonInputProps {
  label?: string;
  type: string;
  placeholder: string;
  sx?: object;
  onClick?: () => void;
  showPasswordToggle?: boolean;
}

const CommonInput = ({
  label,
  type,
  placeholder,
  sx,
  onClick,
  showPasswordToggle = false,
}: CommonInputProps) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      placeholder={placeholder}
      sx={sx}
      slotProps={{
        input: {
          endAdornment: showPasswordToggle ? (
            <InputAdornment position="end">
              <IconButton onClick={onClick}>
                {type === "password" ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
        },
      }}
    />
  );
};

export default CommonInput;
