import { Outlet } from 'react-router-dom';
import Details from '../components/Details/Details';
import BookingForm from '../components/BookingForm/BookingForm';

const CamperPage = () => {
  return (
    <>
      <Details />
      <Outlet />
      <BookingForm />
    </>
  );
};

export default CamperPage;
