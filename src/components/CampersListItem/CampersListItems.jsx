import css from './CampersListItem.module.css';
import sprite from '../../img/sprite.svg';
import { arrayForEquip, BUTTON_VALUES } from '../../constants';
import EquipListItem from '../EquipListItem/EquipListItem';
import Button from '../Button/Button';

const CampersListItem = ({ id, camper }) => {
  return (
    <article className={css.campersListItemWrapper}>
      <figure className={css.imageWrapper}>
        {camper.gallery[0].thumb && (
          <img
            src={`${camper.gallery[0].thumb}`}
            alt={`Photo ${camper.name}`}
            width="292px"
          />
        )}
      </figure>
      <div className={css.infoCamperWrapper}>
        <h2 className={css.camperTitle}>{camper.name}</h2>
        <div className={css.ratingWrapper}>
          {`${camper.rating}(${camper.reviews.length} Reviews)`}
          <span className={css.camperRating}>
            <svg width={16} height={16}>
              <use href={`${sprite}#star`}></use>
            </svg>
          </span>
        </div>
        <address className={css.addressCamper}>
          <span className={css.addressIcon}>
            <svg width={16} height={16}>
              <use href={`${sprite}#map`}></use>
            </svg>
          </span>
          {camper.location}
        </address>
        <p className={css.camperDescription}>{camper.description}</p>
        <ul className={css.camperListEquip}>
          {arrayForEquip
            .filter(equip => {
              if (equip === 'transmission') {
                return camper[equip] === 'automatic';
              }
              return camper[equip];
            })
            .map((equip, index) => (
              <li key={index}>
                <EquipListItem equip={equip} />
              </li>
            ))}
        </ul>
        <Button onPlace={BUTTON_VALUES.camper}>Show more</Button>
      </div>
    </article>
  );
};

export default CampersListItem;
