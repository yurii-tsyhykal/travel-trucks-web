import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Features from './components/Features/Features.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const CamperPage = lazy(() => import('./pages/CamperPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Layout homePage={isHomePage}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route index element={<Navigate to="features" />} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
