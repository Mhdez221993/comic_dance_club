import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createItem } from './reducer';

const NewDance = () => {
  const navigate = useNavigate();
  const distpatch = useDispatch();
  const [message, setMessage] = useState([]);
  const [state, setState] = useState({
    picture: '',
    name: '',
    description: '',
    finance: '',
    option: '',
    total: '',
    duration: '',
    apr: '',
  });

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    distpatch(createItem(state))
      .then((res) => {
        setMessage(res.message);
        if (res.status) {
          navigate('/', { replace: true });
        }
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        {message.map((v) => (<p key={v}>{v}</p>))}
      </div>
      <form>
        <div>
          <input
            type="text"
            name="picture"
            value={state.picture}
            onChange={handleInput}
            placeholder="Picture"
            required
          />
        </div>

        <div>
          <input
            type="name"
            name="name"
            value={state.name}
            onChange={handleInput}
            placeholder="Name"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleInput}
            placeholder="Description"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="finance"
            value={state.finance}
            onChange={handleInput}
            placeholder="Finance"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="option"
            value={state.option}
            onChange={handleInput}
            placeholder="Option"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="total"
            value={state.total}
            onChange={handleInput}
            placeholder="Total"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="duration"
            value={state.duration}
            onChange={handleInput}
            placeholder="Duration"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="apr"
            value={state.apr}
            onChange={handleInput}
            placeholder="APR"
            required
          />
        </div>

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

export default NewDance;
