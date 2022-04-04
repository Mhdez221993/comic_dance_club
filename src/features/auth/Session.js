import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSingInApi } from './reducer';

const Session = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.authReducer);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    dispatch(setSingInApi('users/sign_in', state))
      .then((res) => {
        if (res.status) {
          navigate('/', { replace: true });
        }
      });

    event.preventDefault();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        {message.map((v) => (<p key={v}>{v}</p>))}
      </div>
      <form>
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

export default Session;
