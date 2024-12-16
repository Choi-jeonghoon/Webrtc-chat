import { useNavigate } from "react-router-dom";

const useHandle = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/register");
  };

  const handleHome = () => {
    navigate("/");
  };

  return {
    handleLogin,
    handleSignup,
    handleHome,
  };
};

export default useHandle;
