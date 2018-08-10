const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

app.use(express.static("dist"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/api", (req, res) =>
    res.send('Hello World')
);

app.post('/api/post', function(req, res) {
  res.send(
    `Username: ${req.body.username}
    </br>
    Buginfo: ${req.body.textarea}`
)
console.log(req.body)
});
app.listen(9002, () => console.log("Listening on port 9002!"));
