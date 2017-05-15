import { Chat } from './chat/Chat.core';

window.chat = new Chat();

// window.chat.init().createUser('kololo@gmail.com', 'qwerty').then((data) => {
//     console.log('data: ', data);
// }).catch((err) => {
//     console.log('err: ', err);
// });

window.chat.init();

