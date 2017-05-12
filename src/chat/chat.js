import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {config} from '../config/firebase.config';
import {ConfigureChat} from './config';

export class Chat {
    constructor() {
        this.configureChat = new ConfigureChat();
        this.init();
    }

    init() {
        firebase.initializeApp(config);
    }

}