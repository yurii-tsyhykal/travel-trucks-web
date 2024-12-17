import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <NavLink className={css.logo} to="/">
        Travel<span className={css.logoText}>Trucks</span>
      </NavLink>
    </>
  );
};

export default Logo;
