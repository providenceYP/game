import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logoutUser } from 'store/slices/auth';

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(logoutUser());
    history.push('/');
  }, []);

  return <>Logout</>;
};

export default Logout;
