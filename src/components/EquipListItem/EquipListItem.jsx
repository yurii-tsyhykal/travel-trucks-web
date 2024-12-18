import css from './EquipListItem.module.css';
import sprite from '../../img/sprite.svg';
import { equipIcons } from '../../constants';

const EquipListItem = ({ equip }) => {
  return (
    <div className={css.equipWrapper}>
      <div className={css.equipIconsWrapper}>
        <svg width={20} height={20}>
          <use href={`${sprite}${equipIcons[equip]}`}></use>
        </svg>
        <span className={css.equipText}>{equip}</span>
      </div>
    </div>
  );
};

export default EquipListItem;
