import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton";
import MenuSite from "../../components/MenuSite";
import styles from "./index.module.css";

const { Header } = Layout;

const MainLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <MenuSite />
        <LogoutButton />
      </Header>
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
