import {defaultConfig} from '../config/app.config';
import {content} from '../templates/content';
import {searchTemplate} from '../templates/search.template';
import {userTemplate} from '../templates/users.template';

export class ConfigureChat {
    constructor(options) {
        this.options = Object.assign({}, defaultConfig, options);
        this.chatHTML = null;
        this.init();
    }

    init() {
        this.loadBootsrap();
        this.loadStyles();
        this.loadTemplates();
    }

    loadStyles() {
        if (this.options.customStyles) {
            require(this.options.customStyles);
        }else{
            require("../../assets/styles/main.css");
        }
    }

    loadBootsrap() {
        if (this.options.loadBootsrap) {
            require("bootstrap/dist/css/bootstrap.css");
        }
    }

    loadTemplates() {
        this.chatHTML = document.querySelector(this.options.chatWrapper);

        this.chatHTML.innerHTML = content;

        setTimeout(() => {
            this.loadSearch();
            this.loadUserMessage();
        }, 0);
    }

    loadSearch() {
        if (this.options.search) {
            document.getElementById(this.options.searchId).innerHTML = searchTemplate;
        }
    }

    loadUserMessage() {
        document.getElementById(this.options.usersChatId).innerHTML = userTemplate;
    }
}