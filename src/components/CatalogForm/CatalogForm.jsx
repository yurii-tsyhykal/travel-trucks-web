import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './CatalogForm.module.css';
import { FORMS_ID, initPagination } from '../../constants';
import sprite from '../../img/sprite.svg';
import clsx from 'clsx';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { getCampers } from '../../redux/campers/operations';

const validationSchema = Yup.object({
  location: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /^[A-Za-zА-Яа-яЁё\s-]+$/,
      'Use letters, spaces, and hyphens only.'
    ),
});

const initialValues = {
  location: '',
  AC: '',
  transmission: '',
  kitchen: '',
  TV: '',
  bathroom: '',
  form: '',
};

const CatalogForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(getCampers({...values, ...initPagination}));
  };

  return (
    <aside className={css.asideCatalog}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <div className={css.locationWrapper}>
              <label htmlFor={FORMS_ID.location} className={css.locationLabel}>
                <span className={css.locationText}>Location</span>
                <Field
                  type="text"
                  name="location"
                  id={FORMS_ID.location}
                  className={css.locationInput}
                  placeholder="City"
                />
                <span className={css.locationIconWrapper}>
                  <svg width={20} height={20}>
                    <use href={`${sprite}#map`}></use>
                  </svg>
                </span>
              </label>
              <ErrorMessage
                name="location"
                component="div"
                className={css.error}
              />
            </div>
            <h3 className={css.filtersTitle}>Filters</h3>
            <h4 className={css.equipTitle}>Vehicle equipment</h4>
            <div className={css.equipIconsWrapper}>
              <label
                htmlFor={FORMS_ID.ac}
                className={clsx(css.labelIcons, {
                  [css.active]: values.AC,
                })}
              >
                <Field
                  type="checkbox"
                  name="AC"
                  id={FORMS_ID.ac}
                  className={clsx(css.visuallyHidden, css.inputRadio)}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#wind`}></use>
                  </svg>
                </div>
                <span className={css.inputText}>AC</span>
              </label>
              <label
                htmlFor={FORMS_ID.automatic}
                className={clsx(css.labelIcons, {
                  [css.active]: values.transmission,
                })}
              >
                <Field
                  className={clsx(css.visuallyHidden, css.inputRadio)}
                  type="radio"
                  name="transmission"
                  value="automatic"
                  id={FORMS_ID.automatic}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#diagram`}></use>
                  </svg>
                </div>
                <span className={css.inputText}>Automatic</span>
              </label>
              <label
                htmlFor={FORMS_ID.kitchen}
                className={clsx(css.labelIcons, {
                  [css.active]: values.kitchen,
                })}
              >
                <Field
                  className={clsx(css.visuallyHidden, css.inputRadio)}
                  type="checkbox"
                  name="kitchen"
                  id={FORMS_ID.kitchen}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#cup-hot`}></use>
                  </svg>
                </div>
                <span className={css.inputText}>Kitchen</span>
              </label>
              <label
                htmlFor={FORMS_ID.tv}
                className={clsx(css.labelIcons, {
                  [css.active]: values.TV,
                })}
              >
                <Field
                  className={clsx(css.visuallyHidden, css.inputRadio)}
                  type="checkbox"
                  name="TV"
                  id={FORMS_ID.tv}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#tv`}></use>
                  </svg>
                </div>
                <span className={css.inputText}>TV</span>
              </label>
              <label
                htmlFor={FORMS_ID.bathroom}
                className={clsx(css.labelIcons, {
                  [css.active]: values.bathroom,
                })}
              >
                <Field
                  className={clsx(css.visuallyHidden, css.inputRadio)}
                  type="checkbox"
                  name="bathroom"
                  id={FORMS_ID.bathroom}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#ph_shower`}></use>
                  </svg>
                </div>
                <span className={css.inputText}>Bathroom</span>
              </label>
            </div>
            <h4 className={css.typeTitle}>Vehicle type</h4>
            <div className={css.typeIconsWrapper}>
              <label
                className={clsx(css.labelIcons, {
                  [css.active]: values.form === 'panelTruck',
                })}
                htmlFor={FORMS_ID.van}
              >
                <Field
                  className={css.visuallyHidden}
                  type="radio"
                  name="form"
                  value="panelTruck"
                  id={FORMS_ID.van}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#van`}></use>
                  </svg>
                </div>
                <span className={css.inputText}>Van</span>
              </label>
              <label
                className={clsx(css.labelIcons, css.fullyInputText, {
                  [css.active]: values.form === 'fullyIntegrated',
                })}
                htmlFor={FORMS_ID.fully}
              >
                <Field
                  className={css.visuallyHidden}
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                  id={FORMS_ID.fully}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#fully`}></use>
                  </svg>
                </div>
                <span className={clsx(css.inputText, css.fullyInputText)}>
                  Fully Integrated
                </span>
              </label>
              <label
                className={clsx(css.labelIcons, {
                  [css.active]: values.form === 'alcove',
                })}
                htmlFor={FORMS_ID.alcove}
              >
                <Field
                  className={css.visuallyHidden}
                  type="radio"
                  name="form"
                  value="alcove"
                  id={FORMS_ID.alcove}
                />
                <div>
                  <svg width={32} height={32}>
                    <use href={`${sprite}#alcove`}></use>
                  </svg>
                </div>
                <span className={clsx(css.inputText)}>Alcove</span>
              </label>
            </div>
            <Button>Search</Button>
          </Form>
        )}
      </Formik>
    </aside>
  );
};

export default CatalogForm;
