const express = require("express")
const app = express();

const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`API is live on https://localhost:${PORT}`)
);
