import { Field, Form, Formik } from 'formik';
import css from './CatalogForm.module.css';
import { FORMS_ID } from '../../constants';
import sprite from '../../img/sprite.svg';

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
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
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
        <h3 className={css.filtersTitle}>Filters</h3>
        <div className={css}>
          <h4 className={css.equipTitle}>Vehicle equipment</h4>
          <label htmlFor={FORMS_ID.ac} className={css}>
            <Field
              type="radio"
              name="AC"
              value="true"
              id={FORMS_ID.ac}
              //   hidden
            />
          </label>
          <label htmlFor={FORMS_ID.automatic} className={css}>
            <Field
              className={css}
              type="radio"
              name="transmission"
              value="automatic"
              id={FORMS_ID.automatic}
            />
          </label>
          <label htmlFor={FORMS_ID.kitchen} className={css}>
            <Field
              className={css}
              type="radio"
              name="kitchen"
              value="true"
              id={FORMS_ID.kitchen}
            />
          </label>
          <label htmlFor={FORMS_ID.tv} className={css}>
            <Field
              className={css}
              type="radio"
              name="TV"
              value="true"
              id={FORMS_ID.tv}
            />
          </label>
          <label htmlFor={FORMS_ID.bathroom} className={css}>
            <Field
              className={css}
              type="radio"
              name="bathroom"
              value="true"
              id={FORMS_ID.bathroom}
            />
          </label>
        </div>
        <fieldset className={css}>
          <legend className={css}>Vehicle type</legend>
          <label className={css} htmlFor={FORMS_ID.van}>
            <Field
              className={css}
              type="radio"
              name="form"
              value="panelTruck"
              id={FORMS_ID.van}
            />
          </label>
          <label className={css} htmlFor={FORMS_ID.fully}>
            <Field
              className={css}
              type="radio"
              name="form"
              value="fullyIntegrated"
              id={FORMS_ID.fully}
            />
          </label>
          <label className={css} htmlFor={FORMS_ID.alcove}>
            <Field
              className={css}
              type="radio"
              name="form"
              value="alcove"
              id={FORMS_ID.alcove}
            />
          </label>
        </fieldset>
        <button className={css} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default CatalogForm;
