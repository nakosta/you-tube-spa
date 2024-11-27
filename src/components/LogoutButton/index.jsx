import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div className={styles.buttonLogout}>
      <Button type="primary" danger onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default LogoutButton;
