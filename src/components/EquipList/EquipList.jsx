import EquipListItem from '../EquipListItem/EquipListItem';
import css from './EquipList.module.css';
const EquipList = ({arrayConst, array}) => {
  return (
    <ul className={css.equipList}>
      {arrayConst
        .filter(equip => {
          if (equip === 'transmission') {
            return array[equip] === 'automatic';
          }
          return array[equip];
        })
        .map((equip, index) => (
          <li key={index}>
            <EquipListItem
              equip={equip === 'transmission' ? 'automatic' : equip}
            />
          </li>
        ))}
    </ul>
  );
};

export default EquipList;
