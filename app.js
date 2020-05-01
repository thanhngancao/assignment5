const express = require('express');
const app = express();
const hostname = 'localhost';
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'))

app.use((req, res, next) => {
    console.log("request");
    next();
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

//require đến file ./routers/userRouter.js
var userRoute = require("./routers/usersRouter");
//Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
app.use('/users', userRoute);

app.listen(port, hostname, () => {
    console.log(`I wil run on ${hostname}:${port}/`);
});