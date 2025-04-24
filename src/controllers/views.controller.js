class ViewsController {
    constructor() {
        this.main = async (req, res) => res.render("index"),
        this.register = async (req, res) => res.render("register"),
        this.login = async (req, res) => res.render("login")
    }
}

module.exports = new ViewsController();