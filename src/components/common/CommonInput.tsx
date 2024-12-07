import { TextField } from "@mui/material";

interface CommonInputProps {
  label: string;
  type: string;
  placeholder: string;
  sx?: object;
}

const CommonInput = ({ label, type, placeholder, sx }: CommonInputProps) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      placeholder={placeholder}
      sx={sx}
      slotProps={{
        htmlInput: {
          placeholder: placeholder,
        },
      }}
    />
  );
};

export default CommonInput;
