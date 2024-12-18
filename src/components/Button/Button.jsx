import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ children, onPlace}) => {
  return (
    <button className={clsx(css.button, css[onPlace] )} type="submit">
      {children}
    </button>
  );
};

export default Button;
