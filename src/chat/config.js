import {defaultConfig} from '../config/app.config';

export class ConfigureChat {
    constructor(options) {
        this.options = Object.assign({}, defaultConfig, options);
        this.init();
    }

    init() {
        this.loadBootsrap();
    }

    loadBootsrap() {
        if (this.options.loadBootsrap) {
            require("../../assets/styles/main.css");
        }
    }
}