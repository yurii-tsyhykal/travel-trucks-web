import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <nav className={css.headerNav}>
      <NavLink
        className={({ isActive }) =>
          clsx(css.headerLink, isActive && css.headerLinkActive)
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(css.headerLink, isActive && css.headerLinkActive)
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
