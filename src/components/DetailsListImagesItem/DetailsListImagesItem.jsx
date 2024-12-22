import css from './DetailsListImagesItem.module.css';

const DetailsListImagesItem = ({ thumb }) => {
  return (
    <>
      <img src={`${thumb}`} alt="" width="292px" />
    </>
  );
};

export default DetailsListImagesItem;
