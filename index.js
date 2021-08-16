const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('./app/router');
const expressSession = require('express-session');


app.set('view engine','ejs');
app.set('views','./app/views');
app.use(express.urlencoded({extended: true}));
app.use(expressSession ({
        resave: true,
        saveUninitialized: true,
        secret:process.env.SECRET,
        cookie: {
            secure: false,
            maxAge: (1000*60*60)
        }
}));

app.use(router);

app.listen(PORT, ()=>{
    console.log(`Serveur connecté http://localhost:${PORT}`)
});