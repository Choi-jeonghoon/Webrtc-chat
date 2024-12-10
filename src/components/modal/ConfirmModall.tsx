import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { ConfirmModalProps } from "../../types/ModalType";

const ConfirmModal = ({ message, open, onClose }: ConfirmModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>알림</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
