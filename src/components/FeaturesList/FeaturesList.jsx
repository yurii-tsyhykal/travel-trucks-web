import { formatCamelCase } from '../../utils/FormattedFormText';
import { formattedSpace } from '../../utils/formattedSpace';
import css from './FeaturesList.module.css';

const FeaturesList = ({ vehicle }) => {
  const { length, width, height, tank, consumption, form } = vehicle;
  const formatted = form ? formatCamelCase(form) : 'N/A';
  return (
    <ul className={css.featuresList}>
      <li>
        <p className={css.vehicleText}>form</p>
        <p>{formatted}</p>
      </li>
      <li>
        <p className={css.vehicleText}>length</p>
        <p>{length && formattedSpace(length)}</p>
      </li>
      <li>
        <p className={css.vehicleText}>width</p>
        <p>{width && formattedSpace(width)}</p>
      </li>
      <li>
        <p className={css.vehicleText}>height</p>
        <p>{height && formattedSpace(height)}</p>
      </li>
      <li>
        <p className={css.vehicleText}>tank</p>
        <p>{tank && formattedSpace(tank)}</p>
      </li>
      <li>
        <p className={css.vehicleText}>consumption</p>
        <p>{consumption}</p>
      </li>
    </ul>
  );
};

export default FeaturesList;
