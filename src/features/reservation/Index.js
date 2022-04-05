import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadReservations } from './reducer';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationsReducer.reservations);
  useEffect(() => {
    dispatch(loadReservations());
  }, []);

  return (
    <div>
      <h1>My reservations</h1>
      <ul>
        {
          reservations.map((v) => (
            <li key={v.id}>
              <p>{v.date}</p>
              <p>{v.city}</p>
              <p>{v.item.name}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Reservations;
