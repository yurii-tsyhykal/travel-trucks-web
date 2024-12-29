import css from './ReviewsRating.module.css';
import sprite from '../../img/sprite.svg'

const ReviewsRating = ({ camper }) => {
    const { rating, reviews } = camper;
  return (
    <div className={css.ratingWrapper}>
      {`${rating}(${reviews.length} Reviews)`}
      <span className={css.camperRating}>
        <svg width={16} height={16}>
          <use href={`${sprite}#star`}></use>
        </svg>
      </span>
    </div>
  );
};

export default ReviewsRating;
