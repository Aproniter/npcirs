import bodyParser from "body-parser";
import express from "express";

import routes from "./routes.js";

const port = 3002;
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});