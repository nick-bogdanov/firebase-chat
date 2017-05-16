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

        this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));

        return this;
    }

    createUser(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    onAuthStateChanged() {
        console.log('changed');
        this.checkSigned();
    }

    signIn(email, password) {
        const provider = firebase.auth.EmailAuthProvider.credential(email, password);
        return firebase.auth().signInWithCredential(provider);
    }

    checkSigned() {
        if (this.auth.currentUser) {
            console.log('Signed In');
            return true;
        }
        console.log('Not Signed In');
        return false;
    }

}