import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [state, setState] = useState({});
  const items = useSelector((state) => state.itemsReducer.items);
  const { itemId } = useParams();
  useState(() => {
    const item = items.filter((v) => v.id === Number(itemId));
    setState(item[0]);
  });

  console.log(state);
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
    </div>
  );
};

export default Details;
