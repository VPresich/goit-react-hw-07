import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './operations';
import { getContacts } from './selectors';

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  console.log(items);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};

export default App;
