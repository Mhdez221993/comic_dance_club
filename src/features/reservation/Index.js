import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadReservations } from './reducer';

const Reservations = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationsReducer.reservations);
  const role = useSelector((state) => state.authReducer.role);

  useEffect(() => {
    if (role) {
      dispatch(loadReservations());
    } else {
      navigate('/sign_in', { replace: true });
    }
  }, []);

  return (
    <div>
      <h1>My reservations</h1>
      <ul>
        {
          role && reservations.map((v) => (
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
