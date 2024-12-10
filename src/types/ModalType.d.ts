import { LayoutProps } from "./LayoutType";

export interface ModalProps extends LayoutProps {
  open: boolean;
  onConfirm: () => void; //확인
  onCancel: () => void; //취소
  title?: string;
}

export interface ConfirmModalProps {
  message: string; // 모달에 표시할 메시지
  open: boolean; // 모달 열기/닫기 상태
  onClose: () => void; // 모달을 닫는 함수
}
