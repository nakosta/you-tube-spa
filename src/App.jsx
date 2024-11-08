import { Layout, Divider } from "antd";
import ContentSite from "./components/ContentSite";
import HeaderSite from "./components/HeaderSite";
import MenuSite from "./components/MenuSite";
import styles from "./index.module.css";

const { Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout className={styles.layout}>
      <HeaderSite />
      <Divider className={styles.divider} />
      <Layout>
        <Sider className={styles.sider} width="20%">
          <MenuSite />
        </Sider>
        <ContentSite />
        <Sider className={styles.sider} width="15%"></Sider>
      </Layout>
      <Divider className={styles.divider} />
      <Footer className={styles.footer}>
        Сделано с любовью как шоколад Nestlé
      </Footer>
    </Layout>
  );
};
export default App;