/**
 * Created by Dhanuka Perera on 6/21/2017.
 */
`use strict`
const express = require(`express`);
const app = express();
const port = 3000;

app.use(`/`, express.static(__dirname));

app.listen(port, err => {
    if (err) {
        throw err;
        return;
    }
    console.log(`app listing on ${port}`);
});