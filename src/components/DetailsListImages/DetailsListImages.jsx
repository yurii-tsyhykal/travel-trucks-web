import DetailsListImagesItem from '../DetailsListImagesItem/DetailsListImagesItem';
import css from './DetailsListImages.module.css';

const DetailsListImages = ({ gallery }) => {
  return (
    <ul className={css.detailsImagesList}>
      {gallery.map(({ original }, index) => {
        return (
          <li key={index}>
            <DetailsListImagesItem thumb={original} />
          </li>
        );
      })}
    </ul>
  );
};

export default DetailsListImages;
