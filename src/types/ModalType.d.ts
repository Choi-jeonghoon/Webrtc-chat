import { LayoutProps } from "./LayoutType";

export interface ModalProps extends LayoutProps {
  open: boolean;
  onConfirm: () => void; //확인
  onCancel: () => void; //취소
  title?: string;
}
