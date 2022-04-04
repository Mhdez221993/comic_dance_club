import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from './reducer';

const Items = () => {
  const items = useSelector(({ itemsReducer }) => itemsReducer.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.length) {
      dispatch(loadItems());
    }
  }, []);

  return (
    <ul>
      <h1>Items</h1>
      {items.map((v) => (
        <li key={v.id}>
          <div>
            <img src={v.picture} alt={v.description} />
          </div>
          <p>{v.name}</p>
          <p>{v.description}</p>
          <p>{v.finance}</p>
          <p>{v.option}</p>
          <p>{v.total}</p>
          <p>{v.duration}</p>
          <p>{v.apr}</p>
        </li>
      ))}
    </ul>
  );
};

export default Items;
