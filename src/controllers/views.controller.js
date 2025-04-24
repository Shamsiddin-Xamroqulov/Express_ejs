class ViewsController {
    constructor() {
        this.main = async (req, res) => res.render("index", {title: "Asosiy Sahifa", customJs: "/js/index.js", customCss: "/css/index.css"}),
        this.register = async (req, res) => res.render("register", {title: "Asosiy Sahifa", customJs: "/js/index.js", customCss: "/css/index.css"}),
        this.login = async (req, res) => res.render("login", {title: "Asosiy Sahifa", customJs: "/js/index.js", customCss: "/css/index.css"})
    }
}

module.exports = new ViewsController();