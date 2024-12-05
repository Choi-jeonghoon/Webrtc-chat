import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./FallbackComponent";
import { CommonComponentType } from "../../types/CommonComponentType";

const CustomErrorBoundary = ({ children }: CommonComponentType) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
