import { useState } from 'react';
import css from './Tabs.module.css';
import clsx from 'clsx';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('features');
  const handleClickChange = change => {
    setActiveTab(change);
  };

  return (
    <div className={css.tabsWrapper}>
      <button
        type="button"
        className={clsx(css.tab, { [css.activeTab]: activeTab === 'features' })}
        onClick={() => {
          handleClickChange('features');
        }}
      >
        Features
      </button>
      <button
        type="button"
        className={clsx(css.tab, { [css.activeTab]: activeTab === 'reviews' })}
        onClick={() => {
          handleClickChange('reviews');
        }}
      >
        Reviews
      </button>
    </div>
  );
};

export default Tabs;
