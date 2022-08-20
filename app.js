const express = require("express");
const cors = require("cors");
const middlewares = require("./middlewares")

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use(middlewares.setHeaders);

app.get("/", (req, res) => {
    res.send("CodeThreat Node.JS API")
})

app.listen(PORT, () => console.log(`Server live on PORT:http://localhost:${PORT}`));
