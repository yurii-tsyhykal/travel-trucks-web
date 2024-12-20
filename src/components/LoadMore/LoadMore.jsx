import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMore.module.css';
import { loadMore, loadMoreStart } from '../../redux/campers/slice';
import {
  selectLoadMoreLoading,
  selectTotal,
} from '../../redux/campers/selectors';
import Loader from '../Loader/Loader';

const LoadMore = ({ perPage }) => {
  const isLoading = useSelector(selectLoadMoreLoading);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (perPage < total) {
      dispatch(loadMoreStart());
      setTimeout(() => {
        dispatch(loadMore());
      }, 1500);
    }
  };
  return isLoading ? (
    <Loader />
  ) : (
    <button
      className={css.LoadMoreBtn}
      onClick={handleClick}
      disabled={perPage >= total || total === 0}
    >
      LoadMore
    </button>
  );
};

export default LoadMore;
