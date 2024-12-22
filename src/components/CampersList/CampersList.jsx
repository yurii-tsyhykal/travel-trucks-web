import { useSelector } from 'react-redux';
import CampersListItem from '../CampersListItem/CampersListItems';
import css from './CampersList.module.css';
import { selectCampers, selectPerPage } from '../../redux/campers/selectors';
import LoadMore from '../LoadMore/LoadMore';

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const perPage = useSelector(selectPerPage);
  console.log(campers);
  

  return (
    <div className={css.catalogListWrapper}>
      <ul className={css.catalogList}>
        {campers.slice(0, perPage).map(({ id, ...camper }) => (
          <li key={id}>
            <CampersListItem camper={camper} id={id} />
          </li>
        ))}
      </ul>
      <LoadMore perPage={perPage} />
    </div>
  );
};

export default CampersList;
