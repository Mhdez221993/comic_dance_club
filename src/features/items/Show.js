import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import NewReservation from '../reservation/New';
import { deleteItem } from './reducer';

const Details = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const items = useSelector((state) => state.itemsReducer.items);
  const [reserve, setReserve] = useState(false);
  const { itemId } = useParams();
  useState(() => {
    const item = items.filter((v) => v.id === Number(itemId));
    setState(item[0]);
  });

  const handleDelte = (event) => {
    event.preventDefault();
    dispatch(deleteItem(state.id));
    navigate('/', { replace: true });
  };

  const handleReserve = () => {
    setReserve(true);
  };

  return (
    <div>
      <h1>Details Page</h1>
      <div>

        <div>
          <img src={state.picture} alt={state.description} />
        </div>

        <p>{state.name}</p>
        <p>{state.description}</p>
        <p>{state.finance}</p>
        <p>{state.option}</p>
        <p>{state.total}</p>
        <p>{state.duration}</p>
        <p>{state.apr}</p>
      </div>

      <div>
        {reserve && <NewReservation itemId={state.id} />}
        {!reserve && <button type="button" onClick={handleReserve}>Reserve</button>}
      </div>

      <div>
        <Button type="button" onClick={handleDelte} variant="primary">Delete</Button>
      </div>

    </div>
  );
};

export default Details;
