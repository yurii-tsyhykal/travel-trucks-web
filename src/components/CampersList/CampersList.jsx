import { useDispatch, useSelector } from 'react-redux';
import CampersListItem from '../CampersListItem/CampersListItems';
import css from './CampersList.module.css';
import { selectCampers } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { getCampers } from '../../redux/campers/operations';
import { initPagination } from '../../constants';
import LoadMore from '../LoadMore/LoadMore';

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!campers.length) {
      dispatch(getCampers(initPagination));
    }
  }, [campers.length, dispatch]);
  return (
    <div className={css.catalogListWrapper}>
      <ul className={css.catalogList}>
        {campers.map(({ id, ...camper }) => (
          <li key={id}>
            <CampersListItem camper={camper} id={id} />
          </li>
        ))}
      </ul>
      <LoadMore />
    </div>
  );
};

export default CampersList;
