import {defaultConfig} from '../config/app.config';

export class ConfigureChat {
    constructor(options) {
        this.options = Object.assign({}, defaultConfig, options);
        this.init();
    }

    init() {
        this.loadBootsrap();
        this.loadStyles();
    }

    loadStyles() {
        if (this.options.customStyles) {
            require(this.options.customStyles);
        }else{
            require("../../assets/styles/main.css");
        }
    }

    loadBootsrap() {
        console.log(this.options);
        if (this.options.loadBootsrap) {
            require("bootstrap/dist/css/bootstrap.css");
        }
    }
}