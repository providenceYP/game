import React, { useEffect } from 'react';
import cn from 'classnames';
import { useDispatch, useStore } from 'react-redux';

import Navbar from 'components/Navbar';
import ErrorBoundary from 'components/ErrorBoundary';

import { getUser } from 'store/slices/auth';

import { Props } from './types';

const Layout = ({ className, children }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    const { loading } = store.getState().auth;

    if (!loading) {
      dispatch(getUser());
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className={cn('flex flex-1 justify-center items-center', className)}
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </div>
  );
};

export default Layout;
