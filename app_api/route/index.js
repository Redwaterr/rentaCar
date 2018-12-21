import express from "express";
import Car from "../models/cars";
var ctrlCar = require("../controllers/ctrlCar.js");

const router = express.Router(); 

router.route("/arabalar").get(ctrlCar.arabalarıListele);

router.route("/arabalar/:id").get(ctrlCar.arabaListele);

router.route("/arabalar/ekle").post(ctrlCar.arabaEkle);

router.route("/arabalar/guncelle/:id").put(ctrlCar.arabaGuncelle);

router.route("/arabalar/sil/:id").delete(ctrlCar.arabaSil);

module.exports = router;