import {defaultConfig} from '../config/app.config';

export class ConfigureChat {
    constructor(options) {
        this.options = Object.assign({}, defaultConfig, options);
        this.init();
    }

    init() {
        this.loadBootsrap();
    }

    loadStyles() {
         require("../../assets/styles/main.css");
    }

    loadBootsrap() {
        console.log(this.options);
        if (this.options.loadBootsrap) {
            require("bootstrap/dist/css/bootstrap.css");
        }
    }
}