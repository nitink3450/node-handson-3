const express = require('express');
const app = express();
const port = 9002;

const middleware1 = (req, res, next) => {
    console.log("Local Middleware");
    next();
}
const middleware2 = (req, res, next) => {
    console.log("Global Middleware For All Routes");
    next();
}
app.use(middleware2);

app.get('/', (req, res) => {
    res.send(`<h1>Page 1</h1>`);
    res.end();
})
app.get('/p2', (req, res) => {
    res.send(`<h1>Page 2</h1>`);
    res.end();
})
app.get('/p3', (req, res) => {
    res.send(`<h1>Page 3</h1>`);
    res.end();
})
app.get('/p4', middleware1, (req, res) => {
    res.send(`<h1>Page 4</h1>`);
    res.end();
})
app.get('/p5', middleware1, (req, res) => {
    res.send(`<h1>Page 5</h1>`);
    res.end();
})

app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
});