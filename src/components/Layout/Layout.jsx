import css from './Layout.module.css';

const Layout = ({ childrens }) => {
  return <div className={css.layoutWrapper}>{childrens}</div>;
};

export default Layout;
