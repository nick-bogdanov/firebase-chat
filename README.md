# firebase-chat

Create an instance of chat

`window.chat = new Chat();`

Init chat with firebase config

``
`const config = {`
    `apiKey: apiKey,`
    `authDomain: authDomain,`
    `databaseURL: databaseURL,`
    `projectId: projectId,`
    `storageBucket: storageBucket,`
    `messagingSenderId: messagingSenderId`
`}`

`window.chat.init(config);`


Create a new user. Make shure you gave permissions in firebase console to allow register via email and password.

`window.chat.createUser(email, password)`

