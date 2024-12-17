import { Suspense } from 'react';
import css from './Layout.module.css';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import clsx from 'clsx';

const Layout = ({ homePage, children }) => {
  return (
    <>
      <Header />
      <Main>
        <div className={clsx(homePage ? css.homePage : css.layoutWrapper)}>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </div>
      </Main>
    </>
  );
};

export default Layout;
