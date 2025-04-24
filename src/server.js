const express = require("express");
const path = require("path");
const layout = require("express-ejs-layouts");
const {config} = require("dotenv");
config();
const {serverConfig} = require("./config");
const {PORT} = serverConfig;
const {mainRoutes} = require("./routes/main.routes");

const app = express();
app.use(express.json());
app.use(layout)
app.set("layout", "layout/main")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(process.cwd(), "public")));

// Cruds
app.use("/api", mainRoutes);

// Views
app.use(mainRoutes);

app.use((req, res) => {
    let url = req.url.trim().toLowerCase();
    let method = req.method.trim().toUpperCase();
    return res.render(`errPage`, {url, method, layout: false});
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}-port`);
})