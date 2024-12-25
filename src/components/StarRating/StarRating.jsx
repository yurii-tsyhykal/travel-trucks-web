import css from './StarRating.module.css';
import sprite from '../../img/sprite.svg';
import clsx from 'clsx';

const StarRating = ({ rating }) => {
    console.log(rating);
    
  return (
    <ul className={css.starsList}>
      {[...Array(5)].map((_, index) => {
        return (
          <li key={index}>
            <svg width={16} height={16} className={clsx(rating > index ? css.yellow : css.gray)}>
              <use href={`${sprite}#star`}></use>
            </svg>
          </li>
        );
      })}
    </ul>
  );
};

export default StarRating;
