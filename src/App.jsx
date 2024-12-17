import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const CamperPage = lazy(() => import('./pages/CamperPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog" element={<CamperPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      }
    </>
  );
}

export default App;
