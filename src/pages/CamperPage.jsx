import { Outlet } from 'react-router-dom';
import Details from '../components/Details/Details';

const CamperPage = () => {
  return (
    <>
      <Details />
      <Outlet />
    </>
  );
};

export default CamperPage;
