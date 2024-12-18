import { useSelector } from 'react-redux';
import CampersList from '../components/CampersList/CampersList';
import CatalogForm from '../components/CatalogForm/CatalogForm';
import Container from '../components/Container/Container';
import Loader from '../components/Loader/Loader';
import { CONTAINER_VALUES } from '../constants';
import { selectIsLoading } from '../redux/campers/selectors';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Container container={CONTAINER_VALUES.catalogForm}>
        <CatalogForm />
      </Container>
      <Container container={CONTAINER_VALUES.catalogList}>
        {isLoading ? <Loader /> : <CampersList />}
      </Container>
    </>
  );
};

export default CatalogPage;
