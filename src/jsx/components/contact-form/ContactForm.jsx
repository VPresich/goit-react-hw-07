import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Formik, Form } from 'formik';
import { INITIAL_CONTACT } from '../../auxiliary/constants';
import { FeedbackSchema } from '../../auxiliary/feedback-schema';

import {
  LABEL_NAME,
  LABEL_PHONE,
  CAPTION_ADD,
} from '../../auxiliary/constants';

import CustomButton from '../custom-button/CustomButton';
import FormField from '../form-field/FormField';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('values', values);
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_CONTACT}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.contactform}>
        <div className={styles.info}>
          <FormField type="text" name="name">
            {LABEL_NAME}
          </FormField>
          <FormField type="tel" name="number">
            {LABEL_PHONE}
          </FormField>
        </div>
        <CustomButton type="submit">{CAPTION_ADD}</CustomButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;
