import React, { FC, useState } from 'react';
import { Button, message } from 'antd';

import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { cnPageEnter } from './PageEnter.classname';

import './PageEnter.css';

type PageEnterProps = {
  onEnter: (login: string, token: string) => void;
}

const PageEnter: FC<PageEnterProps> = ({ onEnter }) => {
  const [wantToRegister, setWantToRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleToggleLoginRegister = () => {
    setWantToRegister(prev => !prev);
  };

  const handleStart = () => {
    setLoading(true);
  };

  const handleFinish = () => {
    setLoading(false);
  };

  const handleRegisterFinish = () => {
    setWantToRegister(false);
    messageApi.success('Успешно зарегистрировались, теперь можно войти');
  };

  const handleLoginFinish = (login: string, token: string) => {
    onEnter(login, token);
  };

  const buttonToggleText = wantToRegister ? 'Войти' : 'Зарегистрироваться';

  return (
    <div className={cnPageEnter()}>
      {contextHolder}
      {
        wantToRegister ?
          <RegisterForm
            onStartLoading={handleStart}
            onFinishLoading={handleFinish}
            onSuccess={handleRegisterFinish}
          /> :
          <LoginForm
            onSuccess={handleLoginFinish}
            onStartLoading={handleStart}
            onFinishLoading={handleFinish}
          />
      }
      {
        loading ?
          undefined :
          <>или <Button type="link" onClick={handleToggleLoginRegister}>{buttonToggleText}</Button></>
      }

    </div>
  );
};

export { PageEnter };
