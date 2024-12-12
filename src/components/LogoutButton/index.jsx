import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <Button type="primary" danger onClick={handleLogout}>
      Выйти
    </Button>
  );
};

export default LogoutButton;
