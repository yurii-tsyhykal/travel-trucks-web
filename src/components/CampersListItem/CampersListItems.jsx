import css from './CampersListItem.module.css';
import sprite from '../../img/sprite.svg';
import { arrayForEquip } from '../../constants';
import clsx from 'clsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EquipList from '../EquipList/EquipList';

const CampersListItem = ({ id, camper }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
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
        <div className={css.titlePriceWrapper}>
          <h2 className={css.camperTitle}>{camper.name}</h2>
          <div className={css.price}>
            <span>{`€${camper.price?.toFixed(2)}`}</span>
            <svg
              role="button"
              className={clsx(css.favoriteIcon, { [css.active]: isActive })}
              width={22}
              height={22}
              onClick={handleClick}
            >
              <use href={`${sprite}#heart`}></use>
            </svg>
          </div>
        </div>
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
        <EquipList arrayConst={arrayForEquip} camper={camper} />
        <NavLink
          to={`/catalog/${id}`}
          target="_blank"
          className={css.detailsLink}
        >
          Show more
        </NavLink>
      </div>
    </article>
  );
};

export default CampersListItem;
