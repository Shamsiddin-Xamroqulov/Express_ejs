const path = require("path");

const serverConfig = {
    PORT: process.env.PORT || 5000,
    viewsPath: (filename) => path.join(__dirname, "views", filename)
}

module.exports = {serverConfig}