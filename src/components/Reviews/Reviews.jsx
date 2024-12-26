import { useSelector } from 'react-redux';
import css from './Reviews.module.css';
import { selectDetails } from '../../redux/details/selectors';
import StarRating from '../StarRating/StarRating';

const Reviews = () => {
  const { reviews } = useSelector(selectDetails);

  return (
    <div className={css.reviewWrapper}>
      <ul>
        {reviews &&
          reviews.map((review, index) => {
            return (
              <li key={index} className={css.reviewListItem}>
                <div className={css.personWrapper}>
                  <p className={css.logoName}>
                    {review.reviewer_name.trim()[0].toUpperCase()}
                  </p>
                  <h2 className={css.name}>{review.reviewer_name}</h2>
                  <StarRating rating={review.reviewer_rating} />
                </div>
                <p className={css.comment}>{review.comment}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reviews;
