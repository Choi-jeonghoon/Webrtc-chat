export interface ModalProps {
  open: boolean;
  onConfirm: () => void; //확인
  onCancel: () => void; //취소
  title?: string;
  children: React.ReactNode;
}
