import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSingOutApi } from './reducer';

const DestroySession = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setSingOutApi());
    navigate('/', { replace: true });
  });
};

export default DestroySession;
