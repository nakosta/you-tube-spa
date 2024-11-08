import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import styles from './index.module.css';
import Components from "../Сhapters/Components";
import Props from "../Сhapters/Props";
import State from "../Сhapters/State";
import LifeCycle from "../Сhapters/LifeCycle";
import Events from "../Сhapters/Events";
import RefsFragmentKey from "../Сhapters/RefsFragmentKey";
import Optimization from "../Сhapters/Optimization";
import Context from "../Сhapters/Context";
import Forms from "../Сhapters/Forms";
import Home from "../Сhapters/Home";

const { Content } = Layout;

const ContentSite = () => {
  return (
    <>
      <Content className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/events" element={<Events />} />
          <Route path="/refs_fragment_key" element={<RefsFragmentKey />} />
          <Route path="/optimization" element={<Optimization />} />
          <Route path="/context" element={<Context />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Content>
    </>
  );
};

export default ContentSite;
