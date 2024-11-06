import { useEffect } from "react";
import { Layout, Menu, Image, Typography } from "antd";
import { Route, Routes, Link } from "react-router-dom";
import Components from "./components/Components";
import Props from "./components/Props";
import ReactLogoLight from "./assets/img/logo_light.svg";

const { Header, Footer, Sider, Content } = Layout;

const { Text, Title, Paragraph } = Typography;

const headerStyle = {
  padding: "50px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
};
const titleContainerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
};
const contentStyle = {
  padding: "20px",
};
const siderStyle = {
  textAlign: "center",
  color: "white",
};
const footerStyle = {
  textAlign: "center",
  padding: "10px",
};
const layoutStyle = {
  minHeight: "100vh",
};

const App = () => {
  useEffect(() => {
    document.body.style.margin = "0"; // Убираем стандартный отступ body
  }, []);
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Image width={60} src={ReactLogoLight} />
        <div style={titleContainerStyle}>
          <Title level={2}>Основная теория по библиотеке React</Title>
        </div>
      </Header>

      <Layout>
        <Sider width="25%" style={siderStyle}>
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/components">Components</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/props">Props</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Content style={contentStyle}>
          <Routes>
            <Route path="/components" element={<Components />} />
            <Route path="/props" element={<Props />} />
          </Routes>
        </Content>

        <Sider width="15%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>

      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};
export default App;
