import { useSelector } from 'react-redux';
import { arrayAllEquip, featuresEquipListMargin } from '../../constants';
import EquipList from '../EquipList/EquipList';
import css from './Features.module.css';
import { selectDetails } from '../../redux/details/selectors';
import FeaturesList from '../FeaturesList/FeaturesList';

const Features = () => {
  const camper = useSelector(selectDetails);

  return (
    <div className={css.featuresWrapper}>
      <EquipList
        arrayConst={arrayAllEquip}
        camper={camper}
        margin={featuresEquipListMargin}
      />
      <h2 className={css.vehicleTitle}>Vehicle details</h2>
      <FeaturesList vehicle={camper} />
    </div>
  );
};

export default Features;
