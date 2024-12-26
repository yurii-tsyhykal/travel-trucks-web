import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './BookingForm.module.css';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';

const initialValues = {
  username: '',
  email: '',
  date: null,
  comment: '',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Required')
    .matches(
      /^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Must be a valid email!'
    ),
  date: Yup.date().required('Required'),
  comment: Yup.string(),
});

const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [placeHolder, setPlaceHolder] = useState('Booking date*');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (values, actions) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 2500);
    actions.resetForm();
  };
  return (
    <>
      {isLoading ? (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <div className={css.formWrapper}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ values, setFieldValue, handleBlur }) => (
              <Form className={css.form}>
                <h2 className={css.bookingTitle}>Book your campervan now</h2>
                <p className={css.bookingDesc}>
                  Stay connected! We are always ready to help you.
                </p>
                <div className={css.inputWrapper}>
                  <Field
                    type="text"
                    name="username"
                    required
                    placeholder="Name*"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="username"
                    component="div"
                  />
                </div>
                <div className={css.inputWrapper}>
                  <Field
                    type="text"
                    name="email"
                    required
                    placeholder="Email*"
                  />
                  <ErrorMessage
                    className={css.error}
                    name="email"
                    component="div"
                  />
                </div>
                <div className={css.inputWrapper}>
                  <DatePicker
                    selected={values.date}
                    onChange={date => setFieldValue('date', date)}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 14)}
                    onFocus={() =>
                      setPlaceHolder('Select a date between today')
                    }
                    onBlur={event => {
                      handleBlur(event);
                      setPlaceHolder('Booking date*');
                    }}
                    dateFormat="yyyy-MM-dd"
                    name="date"
                    className={css.calendar}
                    required
                    placeholderText={placeHolder}
                  />
                  <ErrorMessage
                    className={css.error}
                    name="date"
                    component="div"
                  />
                </div>
                <Field
                  className={css.textArea}
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                />
                <div className={css.buttonWrapper}>
                  <Button>Send</Button>
                  {success && (
                    <p className={css.success}>
                      Success! Your submission was received. We will get back to
                      you soon
                    </p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default BookingForm;
