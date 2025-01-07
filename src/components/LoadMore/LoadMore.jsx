import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMore.module.css';
import { selectIsLoading, selectTotal } from '../../redux/campers/selectors';
import Loader from '../Loader/Loader';
import { getCampers } from '../../redux/campers/operations';

const LoadMore = () => {
  const page = 2;
  const perPage = 4;
  const isLoading = useSelector(selectIsLoading);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (perPage < total) {
      dispatch(getCampers({ p: page, l: perPage }));
    }
  };
  return isLoading ? (
    <Loader />
  ) : (
    <button
      className={css.LoadMoreBtn}
      onClick={handleClick}
      disabled={page >= total || total === 0}
    >
      LoadMore
    </button>
  );
};

export default LoadMore;
