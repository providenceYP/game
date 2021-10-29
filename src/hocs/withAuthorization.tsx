import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { State } from 'store';
import { Statuses, User } from 'store/types';

const withAuthorization = (WrappedComponent: React.ComponentType) => {
  const WithAuthorization = (props: any) => {
    const history = useHistory();
    const user = useSelector<State>((state) => state.auth.user) as User;
    const status = useSelector<State>((state) => state.auth.status) as Statuses;

    useEffect(() => {
      if (status === Statuses.ERROR && !user) {
        history.push('/login');
      }
    }, [user, status]);

    return status === Statuses.ERROR && !user ? (
      <div />
    ) : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <WrappedComponent {...props} />
    );
  };

  return WithAuthorization;
};

export default withAuthorization;
