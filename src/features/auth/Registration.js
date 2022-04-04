import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSingUpApi } from './reducer';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState(['All fields are required']);
  const [state, setState] = useState(
    {
      name: '',
      email: '',
      password: '',
      confirmation_password: '',
    },
  );

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSingUpApi('users', state))
      .then((response) => {
        setMessage(response.message);
        if (response.status) {
          navigate('/sing_in', { replace: true });
        }
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
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
            name="name"
            value={state.name}
            onChange={handleInput}
            placeholder="Name"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
            placeholder="Email"
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInput}
            placeholder="Password"
            required
            minLength={5}
            maxLength={50}
          />
        </div>

        <div>
          <input
            placeholder="Confirmation Password"
            type="password"
            name="confirmation_password"
            value={state.confirmation_password}
            onChange={handleInput}
            required
            minLength={5}
            maxLength={50}
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

export default Registration;
