import {firebase} from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import {config} from '../config/firebase.config';

export class Chat {
    constructor() {
        this.init();
    }

    init() {

        console.log(firebase);
        

        firebase.initializeApp(config);

        const messaging = firebase.messaging();

        messaging.requestPermission()
            .then(function () {
                console.log('Notification permission granted.');
                // TODO(developer): Retrieve an Instance ID token for use with FCM.
                // ...
            })
            .catch(function (err) {
                console.log('Unable to get permission to notify.', err);
            });
    }

}