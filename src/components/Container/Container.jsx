import clsx from 'clsx';
import css from './Container.module.css';

const Container = ({ container, children }) => {
    const className = container ? clsx(css[container]) : null;
    return (
      <div className={className}>{children}</div>
    );
};

export default Container;
