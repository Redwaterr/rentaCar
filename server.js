const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routesAPI = require("./app_api/route/index");

import Cars from "./app_api/models/cars";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api",routesAPI)


app.listen(4000,(err) => {
    if(err) {
        return console.log("Bağlanamadık");
    }
    console.log("4000 protunaki servera bağlantı sağlanıldı.");
})


