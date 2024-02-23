import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = ({ children }) => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.searchbox}>
      <label className={styles.label} htmlFor={searchId}>
        {children}
      </label>
      <input
        className={styles.input}
        id={searchId}
        type="text"
        value={value}
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
