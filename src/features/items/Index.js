import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadItems } from './reducer';

const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemsReducer.items);

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  return (
    <ul>
      <h1>Items</h1>
      {items.map((v) => (
        <li key={v.id}>
          <div>
            <Link to={`/items/${v.id}`}>
              <img src={v.picture} alt={v.description} />
            </Link>
          </div>
          <p>{v.name}</p>
          <p>{v.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Items;
