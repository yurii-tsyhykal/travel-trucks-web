import CampersList from '../components/CampersList/CampersList';
import CatalogForm from '../components/CatalogForm/CatalogForm';
import Container from '../components/Container/Container';
import { CONTAINER_VALUES } from '../constants';

const CatalogPage = () => {
  return (
    <>
      <Container container={CONTAINER_VALUES.catalogForm}>
        <CatalogForm />
      </Container>
      <Container>
        <CampersList />
      </Container>
    </>
  );
};

export default CatalogPage;
