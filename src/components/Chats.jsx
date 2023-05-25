import React from 'react';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import { Chat } from './index';

const MyChats = styled(List)`
    height: 400px;
    padding: 0;
    overflow: auto;
`;

const Chats = (props) => {
    return (
        <MyChats sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} id={'scroll-area'}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />;
            })}
        </MyChats>
    );
};

export default Chats;
