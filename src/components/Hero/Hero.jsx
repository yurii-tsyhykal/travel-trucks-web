import { NavLink } from 'react-router-dom';
import { CONTAINER_VALUES } from '../../constants';
import Container from '../Container/Container';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <Container container={CONTAINER_VALUES.heroText}>
      <h1 className={css.heroTitle}>Campers of your dreams</h1>
      <p className={css.heroDescription}>You can find everything you want in our catalog</p>
      <NavLink className={css.heroLink} to='/catalog'>View Now</NavLink>
    </Container>
  );
};

export default Hero;
