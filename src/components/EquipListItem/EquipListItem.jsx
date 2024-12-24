import css from './EquipListItem.module.css';
import sprite from '../../img/sprite.svg';
import { equipIcons, specArrayItems } from '../../constants';

const EquipListItem = ({ item, value }) => {
  let iconPath;
  if (item === 'form') {
    iconPath = equipIcons.form[value];
  } else {
    iconPath = equipIcons[item];
  }

  return (
    <div className={css.equipWrapper}>
      <div className={css.equipIconsWrapper}>
        <svg width={20} height={20}>
          <use href={`${sprite}${iconPath}`}></use>
        </svg>
        <span className={css.equipText}>
          {specArrayItems.includes(item) ? value : item}
        </span>
      </div>
    </div>
  );
};

export default EquipListItem;
