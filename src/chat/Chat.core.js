import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "es6-promise/auto";
import { config } from '../config/firebase.config';
import { ConfigureChat } from './Chat.ui';

export class Chat {
    constructor() {
        this.configureChat = new ConfigureChat();
    }

    init(options = config) {
        firebase.initializeApp(options);

        this.auth = firebase.auth();
        this.database = firebase.database();

        return this;
    }

    createUser(login, pass) {
        if (login && pass) {
            return firebase.auth().createUserWithEmailAndPassword(login, pass);
        } else {
            return Promise.reject('User hasn\'t been authorized. Missing credentials');
        }
    }

}