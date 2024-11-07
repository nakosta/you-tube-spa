import { Link } from "react-router-dom";
import { Menu } from "antd";
// import styles from './index.module.css';

const MenuSite = () => {
  return (
    <>
      <Menu mode="inline">
        <Menu.Item key="1">
          <Link to="/components">Components</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/props">Props</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/state">State (useState)</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/lifecycle">LifeCycle (useEffect)</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/events">Events</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/refs_fragment_key">Refs, Fragment, key</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/optimization">React.memo, useMemo, UseCallback</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/context">Context (useContext)</Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/forms">React Hook Form VS Formik</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuSite;
