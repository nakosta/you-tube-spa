import { Button } from "antd";
import styles from "./index.module.css";

const LogoutButton = ({ handleLogout }) => (
  <div className={styles.buttonLogout}>
    <Button type="primary" danger onClick={handleLogout}>
      Log out
    </Button>
  </div>
);


export default LogoutButton
