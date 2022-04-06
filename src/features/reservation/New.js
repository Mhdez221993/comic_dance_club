import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReservation } from './reducer';

const NewReservation = ({ itemId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.itemsReducer.items);
  const [state, setState] = useState({
    date: '',
    city: '',
    item_id: itemId,
  });

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createReservation(state));
    navigate('/reservations', { replace: true });
  };

  return (
    <div>
      <h1>New Reservation</h1>
      <form>

        <div>
          <input
            type="text"
            name="city"
            value={state.value}
            onChange={handleInput}
            placeholder="City"
          />
        </div>

        <div>
          <input
            type="date"
            name="date"
            value={state.date}
            onChange={handleInput}
            placeholder="Date"
          />
        </div>

        {!itemId
          && (
            <div>
              <select name="item_id" value={state.item_id} onChange={handleInput}>
                {items.map((v) => (
                  <option key={v.id} name="item_id" value={v.id}>{v.name}</option>
                ))}
              </select>
            </div>
          )}

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

NewReservation.propTypes = {
  itemId: PropTypes.number.isRequired,
};

export default NewReservation;
