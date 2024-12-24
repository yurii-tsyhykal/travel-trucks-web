import EquipListItem from '../EquipListItem/EquipListItem';
import css from './EquipList.module.css';
const EquipList = ({ arrayConst, camper }) => {
  const array = arrayConst.filter(item => camper[item]).map(item => {
    return { item, value: camper[item] };
  });


  return (
    <ul className={css.equipList}>
      {array.map(({ item, value }, index) => (
        <li key={index}>
          <EquipListItem item={item} value={value}  />
        </li>
      ))}
    </ul>
  );
};

export default EquipList;
