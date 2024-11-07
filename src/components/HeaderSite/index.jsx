import { Layout, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import styles from './index.module.css';
import ReactLogoLight from "../../assets/img/logo_light.svg";

const { Header } = Layout;

const { Title } = Typography;

const HeaderSite = () => {
  return (
    <>
      <Header className={styles.header}>
        <Link to="/" className={styles.logoContainer}>
          <img width={60} src={ReactLogoLight} alt="Logo" />
        </Link>
        <div className={styles.titleContainerStyle}>
          <Title level={2}>Основная теория по библиотеке React</Title>
        </div>
      </Header>
    </>
  );
};

export default HeaderSite;
