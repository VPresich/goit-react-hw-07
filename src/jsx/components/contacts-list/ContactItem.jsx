import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors.js';
import { deleteContact } from '../../redux/operations.js';
import { FaUser, FaPhone } from 'react-icons/fa';
import CustomButton from '../custom-button/CustomButton';
import { CAPTION_DELETE, CAPTION_DELETEING } from '../../auxiliary/constants';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
        {isLoading ? CAPTION_DELETEING : CAPTION_DELETE}
      </CustomButton>
    </>
  );
};

export default ContactItem;
