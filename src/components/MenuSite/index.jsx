import { Link } from "react-router-dom";
import { Menu } from "antd";
// import styles from './index.module.css';

const MenuSite = () => {
  return (
    <>
      <Menu mode="inline"
        items={[
          {
            key: '1',
            label: <Link to="/components">Components</Link>
          },
          {
            key: '2',
            label: <Link to="/props">Props</Link>
          },
          {
            key: '3',
            label: <Link to="/state">State (useState)</Link>
          },
          {
            key: '4',
            label: <Link to="/lifecycle">LifeCycle (useEffect)</Link>
          },
          {
            key: '5',
            label: <Link to="/events">Events</Link>
          },
          {
            key: '6',
            label: <Link to="/refs_fragment_key">Refs, Fragment, key</Link>
          },
          {
            key: '7',
            label: <Link to="/optimization">React.memo, useMemo, UseCallback</Link>
          },
          {
            key: '8',
            label: <Link to="/context">Context (useContext)</Link>
          },
          {
            key: '9',
            label: <Link to="/forms">React Hook Form VS Formik</Link>
          }
        ]}
      />
    </>
  );
};

export default MenuSite;
