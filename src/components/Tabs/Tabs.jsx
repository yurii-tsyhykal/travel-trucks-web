import { useEffect, useState } from 'react';
import css from './Tabs.module.css';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

const Tabs = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState('features');
  const handleClickChange = change => {
    setActiveTab(change);
    };
    
  useEffect(() => {
    if (pathname.includes('reviews')) {
      setActiveTab('reviews');
    }
  }, [pathname]);

  return (
    <div className={css.tabsWrapper}>
      <NavLink
        to="features"
        className={clsx(css.tab, { [css.activeTab]: activeTab === 'features' })}
        onClick={() => {
          handleClickChange('features');
        }}
      >
        Features
      </NavLink>
      <NavLink
        to="reviews"
        className={clsx(css.tab, { [css.activeTab]: activeTab === 'reviews' })}
        onClick={() => {
          handleClickChange('reviews');
        }}
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default Tabs;
