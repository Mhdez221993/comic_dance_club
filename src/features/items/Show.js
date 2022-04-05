import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteItem } from './reducer';

const Details = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const items = useSelector((state) => state.itemsReducer.items);
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
        <button type="button" onClick={handleDelte}>Delete</button>
      </div>
    </div>
  );
};

export default Details;
