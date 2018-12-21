const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routesAPI = require("./app_api/route/index");


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api",routesAPI)


app.listen(port,(err) => {
    if(err) {
        return console.log("Bağlanamadık");
    }
    console.log(port+" portundaki servera bağlantı sağlanıldı.");
})


