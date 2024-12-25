import clsx from 'clsx';
import EquipListItem from '../EquipListItem/EquipListItem';
import css from './EquipList.module.css';
const EquipList = ({ arrayConst, camper, margin = null }) => {
  const array = arrayConst
    .filter(item => camper[item])
    .map(item => {
      return { item, value: camper[item] };
    });

  return (
    <ul className={clsx(css.equipList, css[margin])}>
      {array.map(({ item, value }, index) => (
        <li key={index}>
          <EquipListItem item={item} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default EquipList;
