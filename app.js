const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


// app.use(express.static('public'))

// app.use((req, res, next) => {
//     console.log("request");
//     next();
// });

app.get('/', (req, res) => {
    res.render('index');
})

//require đến file ./routers/userRouter.js
var userRoute = require("./routers/usersRouter");
//Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
app.use('/users', userRoute);

app.listen(port);