import { useParams } from 'react-router-dom';
import DetailsListImages from '../DetailsListImages/DetailsListImages';
import css from './Details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamper } from '../../redux/details/operations';
import { selectDetails } from '../../redux/details/selectors';
import Loader from '../Loader/Loader';
import Tabs from '../Tabs/Tabs';
import sprite from '../../img/sprite.svg';
import { formattedLocation } from '../../utils/formattedLocation';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectDetails);
  const formatLocation = camper?.location && formattedLocation(camper.location);

  useEffect(() => {
    dispatch(getCamper(id));
  }, [dispatch, id]);

  if (!camper || !camper.gallery) {
    return <Loader />;
  }
  return (
    <>
      <div className={css.titleWrapper}>
        <h1 className={css.titleDetails}>{camper.name}</h1>
        <div className={css.priceLocationWrapper}>
          <span className={css.reviews}>
            <svg width={16} height={16}>
              <use href={`${sprite}#star`}></use>
            </svg>
            {`${camper.rating}(${camper.reviews.length} Reviews)`}
          </span>
          <address className={css.address}>
            <span></span>
            {formatLocation}
          </address>
        </div>
        <span className={css.price}>{`€${camper.price?.toFixed(2)}`}</span>
      </div>
      <DetailsListImages gallery={camper.gallery} />
      <p className={css.description}>{camper.description}</p>
      <Tabs />
    </>
  );
};

export default Details;
