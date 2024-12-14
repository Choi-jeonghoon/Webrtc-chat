import { Modal, Box, Typography, Button } from "@mui/material";
import { ConfirmModalProps } from "../../types/ModalType";

const ConfirmModal = ({ message, open, onClose }: ConfirmModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 200,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" id="confirm-modal-title">
          알림
        </Typography>
        <Typography
          variant="body2"
          id="confirm-modal-description"
          sx={{ mt: 2 }}
        >
          {message}
        </Typography>
        <Button
          variant="contained"
          onClick={onClose}
          color="primary"
          sx={{ mt: 3, width: "100%" }}
        >
          닫기
        </Button>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
