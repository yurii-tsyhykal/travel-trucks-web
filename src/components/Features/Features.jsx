import { useSelector } from 'react-redux';
import { arrayAllEquip } from '../../constants';
import EquipList from '../EquipList/EquipList';
import css from './Features.module.css';
import { selectDetails } from '../../redux/details/selectors';

const Features = () => {
  const camper = useSelector(selectDetails);
  return (
    <div className={css.featuresWrapper}>
      <EquipList arrayConst={arrayAllEquip} camper={camper} />
    </div>
  );
};

export default Features;
