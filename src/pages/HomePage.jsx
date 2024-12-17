import Container from '../components/Container/Container';
import Hero from '../components/Hero/Hero';
import { CONTAINER_VALUES } from '../constants';

const HomePage = () => {
  return (
    <Container container={CONTAINER_VALUES.heroImg}>
      <Hero />
    </Container>
  );
};

export default HomePage;
