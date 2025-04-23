const {serverConfig} = require("../config");

const {viewsPath} = serverConfig

class ViewsController {
    constructor() {
        this.main = async (req, res) => res.render(viewsPath("index")),
        this.register = async (req, res) => res.render(viewsPath("register")),
        this.login = async (req, res) => res.render(viewsPath("login")) 
    }
}

module.exports = new ViewsController();