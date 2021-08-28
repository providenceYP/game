import React from 'react';
import cn from 'classnames';

import Navbar from 'components/Navbar';

import { Props } from './types';

const Layout = ({ className, children }: Props): JSX.Element => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className={cn('flex flex-1 justify-center items-center', className)}>
      {children}
    </main>
  </div>
);

export default Layout;
