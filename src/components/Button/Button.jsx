import css from './Button.module.css';

const Button = ({ children }) => {
  return (
    <button className={css.button} type="submit">
      {children}
    </button>
  );
};

export default Button;
