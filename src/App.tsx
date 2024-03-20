import React, { useState } from 'react';

import { cnApp } from './App.classname';
import { PageEnter } from './pages/PageEnter/PageEnter';

import './App.css';

type User = {
  login: string;
  token: string;
};

const App = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleEnter = (login: string, token: string) => {
    setUser({ login, token });
  };

  return (
    <div className={cnApp()}>
      {user ? 'Добро пожаловать' : <PageEnter onEnter={handleEnter} />}
    </div>
  );
}

export { App };
