import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSingUpApi } from '../auth/reducer';

const Registration = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [message, setMessage] = useState(['All fields are required'])
  const [state, setState] = useState(
    {
      name: '',
      email: '',
      password: '',
      confirmation_password: ''
    }
  )

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    dispatch(setSingUpApi('users', state))
      .then(response => {
        setMessage(response.message)
        if (response.status) {
          navigate('/', { replace: true })
        }
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        {message.map((v, i) => (<p key={i}>{v}</p>))}
      </div>
      <form>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={handleInput}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={handleInput}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={state.password}
            onChange={handleInput}
            required minLength={5} maxLength={50}
          />
        </div>

        <div>
          <label>Confirmation Password</label>
          <input
            type='confirmation_password'
            name='confirmation_password'
            value={state.confirmation_password}
            onChange={handleInput}
            required minLength={5} maxLength={50}
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
          >Submit</button>
        </div>

      </form>
    </div>
  )
};

export default Registration;
