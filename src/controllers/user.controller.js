class UserController {
    constructor() {
        this.getUsers = async (req, res) => {
            res.send("Hello Brother !");
        },
        this.postUser = async (req, res) => {
            res.send("Hello Brother !");
        },
        this.putUser = async (req, res) => {
            res.send("Hello Brother !");
        },
        this.deleteUser = async (req, res) => {
            res.send("Hello Brother !");
        },
        this.getUser = async (req, res) => {
            res.send("Hello Brother !");
        }
    }
} 

module.exports = new UserController();