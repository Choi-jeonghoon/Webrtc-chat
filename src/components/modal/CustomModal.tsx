import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

import { ModalProps } from "../../types/ModalType";

const CustomModal = ({
  open,
  onCancel,
  onConfirm,
  title,
  children,
}: ModalProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          취소
        </Button>
        <Button onClick={onConfirm} color="primary">
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
