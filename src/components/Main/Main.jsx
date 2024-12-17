import css from './Main.module.css'

const Main = ({ children }) => {
  return <main className={css.main}>{children}</main>;
};

export default Main;
