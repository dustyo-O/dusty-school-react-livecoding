import React, { FC, useEffect, useState } from 'react';
import { Button, Spin } from 'antd';

import { cnPageChat } from './PageChat.classname';
import { User } from '../../types/user';
import { MessageSend } from '../../components/MessageSend/MessageSend';
import { Chat } from '../../components/Chat/Chat';

import './PageChat.css';

type PageChatProps = {
  user: User;
  chat: string;
  onExitChat: () => void;
}

const PageChat: FC<PageChatProps> = ({ user, chat, onExitChat }) => {
  const [websocket, setWebSocket] = useState<WebSocket | undefined>(undefined);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000/');

    console.log(socket);

    setWebSocket(socket);
  }, []);

  return (
    <div className={cnPageChat()}>
      {websocket ? <>
        <Button type="dashed" onClick={onExitChat}>Выйти из чата</Button>
        <Chat user={user} chat={chat} socket={websocket} />
        <MessageSend user={user} chat={chat} socket={websocket} />
      </> : <Spin />}
    </div>
  );
};

export { PageChat };
