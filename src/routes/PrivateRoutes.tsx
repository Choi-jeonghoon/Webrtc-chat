import CustomModal from "../components/modal/CustomModal";
import useModal from "../hooks/useModal";
import { CommonComponentType } from "../types/CommonComponentType";

export const PrivateRouter = ({ children }: CommonComponentType) => {
  const { openModal, handleModalConfirm, handleCancel } = useModal();

  if (openModal) {
    return (
      <CustomModal
        open={openModal}
        onConfirm={handleModalConfirm}
        onCancel={handleCancel}
        title="로그인이 필요합니다."
      >
        <p>로그인 상태가 아닙니다. 로그인 페이지로 이동하시겠습니까?</p>
      </CustomModal>
    );
  }

  // 인증된 사용자만 자식 컴포넌트 렌더링
  return <>{children}</>;
};
