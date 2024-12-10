import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface CommonInputProps {
  label?: string;
  type: string;
  placeholder: string;
  sx?: object;
  onClick?: () => void;
  value?: string;
  showPasswordToggle?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput = ({
  label,
  type,
  placeholder,
  sx,
  onClick,
  value,
  onChange,
  showPasswordToggle = false,
}: CommonInputProps) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      placeholder={placeholder}
      value={value} // value 적용
      onChange={onChange} // onChange 핸들러 연결
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
