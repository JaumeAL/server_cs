console.log("todo fino");

const app = require('./app');
const {PORT} = process.env;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Server is working as expected</h1>");
});

module.exports = app;