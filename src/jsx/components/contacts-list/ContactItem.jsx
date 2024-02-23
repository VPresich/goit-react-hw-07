import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations.js';
import { FaUser, FaPhone } from 'react-icons/fa';
import CustomButton from '../custom-button/CustomButton';
import { CAPTION_DELETE } from '../../auxiliary/constants';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {number}
        </p>
      </div>
      <CustomButton onClick={handleDeleteItem} type={'button'}>
        {CAPTION_DELETE}
      </CustomButton>
    </>
  );
};

export default ContactItem;
