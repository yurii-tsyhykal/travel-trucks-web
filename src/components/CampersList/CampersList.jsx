import { useSelector } from 'react-redux';
import CampersListItem from '../CampersListItem/CampersListItems';
import css from './CampersList.module.css';
import { selectCampers } from '../../redux/campers/selectors';

const CampersList = () => {
  const campers = useSelector(selectCampers);
  return (
    <ul className={css.catalogList}>
      {campers.map(({ id, ...camper }) => (
        <li key={id}>
          <CampersListItem camper={camper} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
