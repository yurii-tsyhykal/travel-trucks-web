import CampersListItems from '../CampersListItems/CampersListItems';
import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <ul className={css.catalogList}>
      <CampersListItems />
    </ul>
  );
};

export default CampersList;
